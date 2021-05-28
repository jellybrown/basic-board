import React, { useState } from "react";
import { Content } from "../Detail/DetailElement";
//import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWrapper, Column, Row, Title, ColumnWrapper } from "./FormElement";
const Form = () => {
  const [text, setText] = useState();
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <FormWrapper>
      <Row className="field">
        <Title className="label">작성자</Title>
        <ColumnWrapper>
          <div className="control">
            <input className="input" type="text" placeholder="김모모" />
          </div>
          <div className="control">
            <input
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
          <input className="input" type="text" placeholder="ex) 123456" />
        </Column>
      </Row>
      <Row className="field">
        <Title className="label">제목</Title>
        <Column className="control">
          <input className="input" type="text" placeholder="ex) 안녕하세요." />
        </Column>
      </Row>
      <Row>
        <Title className="label">내용</Title>
        <Column>
          <textarea
            class="textarea"
            placeholder="내용을 입력해주세요."
            rows="8"
          ></textarea>
        </Column>
      </Row>
    </FormWrapper>
  );
};

// <FontAwesomeIcon icon={faUser} className="fauser" />

export default Form;
