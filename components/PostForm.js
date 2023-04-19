import React, { useEffect, useRef } from "react";
import { Button, Form, Input } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";
import useInput from "../hooks/useInput";

const PostForm = () => {
  const { imagePaths, addPostLoading, addPostDone } = useSelector(
    (state) => state.post
  );

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput();

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text))
   
  }, [text]);
  return (
    <Form onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" htmlType="submit">
          짹쨱
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v.id}>
            <img src={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
