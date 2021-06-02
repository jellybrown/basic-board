import React from "react";
//import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWrapper, Column, Row, Title, ColumnWrapper } from "./FormElement";
import axios from "axios";
import useInput from "../../hooks/useInput";

const Form = () => {
  const [userName, onChangeName, setUserName] = useInput();
  const [userEmail, onChangeEmail, setUserEmail] = useInput();
  const [password, onChangePw, setPassword] = useInput();
  const [title, onChangeTitle, setTitle] = useInput();
  const [content, onChangeContent, setContent] = useInput();

  const onUpload = () => {
    const body = {
      user: {
        name: userName,
        email: userEmail,
      },
      password,
      title,
      content,
    };
    console.log(body);
    // axios.post('/post', )
  };

  return (
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
      <button onClick={onUpload}>작성</button>
    </FormWrapper>
  );
};

// <FontAwesomeIcon icon={faUser} className="fauser" />

export default Form;
