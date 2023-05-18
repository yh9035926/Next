import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  const menuItems = [
    {
      label: <Link href="/">노드버드</Link>,
      key: "nodebord",
    },
    {
      label: <Link href="/profile">프로필</Link>,
      key: "profile",
    },
    {
      label: (
        <Input.Search
          enterButton="Search"
          style={{ verticalAlign: "middle" }}
        />
      ),
      key: "search",
    },
    {
      label: <Link href="/signup">회원가입</Link>,
      key: "signup",
    },
  ];
  return (
    <div>
      <Menu mode="horizontal" items={menuItems}></Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.naver.com"
            target={"_blank"}
            rel="noreferrer noopoener"
          >
            네이버 가기
          </a>
        </Col>
      </Row>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
