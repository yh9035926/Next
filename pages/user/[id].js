import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import { LOAD_MY_INFO_REQUEST } from "../../type";
import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { LOAD_USER_POSTS_REQUEST, LOAD_USER_REQUEST } from "../../type";
import Head from "next/head";
import { Avatar, Card } from "antd";
import { useRouter } from "next/router";
import AppLayout from "../../components/AppLayout";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    function onScroll() {
      console.log(
        window.screenY,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      )
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId:
              mainPosts[mainPosts.length - 1] &&
              mainPosts[mainPosts.length - 1].id,
            data: id,
          });
        }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length, hasMorePost, id]);

  return (
    <AppLayout>
      <Head>
        <title>{userInfo.nickname}님의 글</title>

        <meta name="description" content={`${userInfo.nickname}님의 게시글`} />
        <meta property="og:title" content={`${userInfo.nickname}님의 게시금`} />
        <meta
          property="og:description"
          content={`${userInfo.nickname}님의 게시글`}
        />
        <meta
          property="og:image"
          content={"https://nodebird.com/favicon.png"}
        />
        <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              짹쨱
              <br />
              {userInfo.Posts}
            </div>,
            <div key="followings">
              팔로잉
              <br />
              {userInfo.Followings}
            </div>,
            <div key="followers">
              팔로워
              <br />
              {userInfo.Followers}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
            description="우자"
          />
        </Card>
      ) : null}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    } //Cookie 넣어줘야 로그인 새로고침 가능
    context.store.dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default User;
