import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Button, Checkbox } from "antd";
import { useCallback } from "react";
import useInput from "../hooks/useInput";
const Signup = () => {
  const [id, onChangeId] = useInput();
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
    } else alert("회원가입이 완료되었습니다");
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmitSignup}>
        <div>
          <label>아이디</label>
          <br />
          <Input value={id} onChange={onChangeId} />
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
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
