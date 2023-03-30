import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Button, Checkbox } from "antd";
import { useCallback } from "react";
import useInput from "../hooks/useInput";
import { SIGN_UP_REQUEST } from "../type";
import { useDispatch, useSelector } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const [nickname, onChangenickname] = useInput();

  const [term, setTerm] = useState();
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  });

  const [passwordCheck, setPasswordCheck] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onSubmitSignup = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmitSignup}>
        <div>
          <label>이메일</label>
          <br />
          <Input value={email} onChange={onChangeEmail} type="email" />
        </div>
        <div>
          <label>닉네임</label>
          <br />
          <Input value={nickname} onChange={onChangenickname} />
        </div>
        <div>
          <label>비민번호</label>
          <br />
          <Input type="password" value={password} onChange={onChangePassword} />
        </div>
        <div>
          <label>비민번호 체크</label>
          <br />
          <Input
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox checked={term} onChange={onChangeTerm}>
            동의합니까?
          </Checkbox>
          {termError && <div>약관에 동의하셔야 합니다</div>}
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            회원가입
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
