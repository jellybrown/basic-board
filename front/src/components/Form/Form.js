import React, { useState } from "react";
//import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormWrapper,
  ButtonWrapper,
  Column,
  Row,
  Title,
  ColumnWrapper,
  DoneMessage,
  Done,
} from "./FormElement";
import axios from "axios";
import useInput from "../../hooks/useInput";
import { addPost } from "../../redux/PostsSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, onChangeName, setUserName] = useInput();
  const [userEmail, onChangeEmail, setUserEmail] = useInput();
  const [password, onChangePw, setPassword] = useInput();
  const [title, onChangeTitle, setTitle] = useInput();
  const [content, onChangeContent, setContent] = useInput();

  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const onUpload = () => {
    const payload = {
      user: {
        name: userName,
        email: userEmail,
      },
      password,
      title,
      content,
    };
    dispatch(addPost(payload));
    setDone(true);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <>
      {done && (
        <Done>
          <DoneMessage>게시글 작성이 완료되었습니다.</DoneMessage>
        </Done>
      )}
      {!done && (
        <FormWrapper>
          <Row className="field">
            <Title className="label">작성자</Title>
            <ColumnWrapper>
              <div className="control">
                <input
                  value={userName}
                  onChange={onChangeName}
                  className="input"
                  type="text"
                  placeholder="김모모"
                />
              </div>
              <div className="control">
                <input
                  value={userEmail}
                  onChange={onChangeEmail}
                  className="input"
                  type="email"
                  placeholder="hello@gmail.com"
                />
              </div>
            </ColumnWrapper>
          </Row>
          <Row className="field">
            <Title className="label">게시글 비밀번호</Title>
            <Column className="control">
              <input
                value={password}
                onChange={onChangePw}
                className="input"
                type="text"
                placeholder="게시글 조회시 필요합니다."
              />
            </Column>
          </Row>
          <Row className="field">
            <Title className="label">제목</Title>
            <Column className="control">
              <input
                value={title}
                onChange={onChangeTitle}
                className="input"
                type="text"
                placeholder="제목을 입력해주세요."
              />
            </Column>
          </Row>
          <Row>
            <Title className="label">내용</Title>
            <Column>
              <textarea
                value={content}
                onChange={onChangeContent}
                class="textarea"
                placeholder="내용을 입력해주세요."
                rows="8"
              ></textarea>
            </Column>
          </Row>
          <ButtonWrapper>
            <button class="button is-info" onClick={onUpload}>
              작성
            </button>
          </ButtonWrapper>
        </FormWrapper>
      )}
    </>
  );
};

// <FontAwesomeIcon icon={faUser} className="fauser" />

export default Form;
