import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import { LOAD_USER_REQUEST } from "../type";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import Head from "next/head";
const About = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>내 정보</title>
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
    </AppLayout>
  );
};
export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default About;
