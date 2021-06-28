import React, { useState } from 'react';
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
} from './FormElement';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import { addPost, editCurrentPage, editPost } from '../../redux/PostsSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Form = ({ prevContent }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, onChangeName, setUserName] = useInput(
    prevContent ? prevContent.user.name : null
  );
  const [userEmail, onChangeEmail, setUserEmail] = useInput(
    prevContent ? prevContent.user.email : null
  );
  const [password, onChangePw, setPassword] = useInput(
    prevContent ? prevContent.password : null
  );
  const [title, onChangeTitle, setTitle] = useInput(
    prevContent ? prevContent.title : null
  );
  const [content, onChangeContent, setContent] = useInput(
    prevContent ? prevContent.content : null
  );

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

    if (!prevContent) dispatch(addPost(payload));
    else dispatch(editPost(payload));

    setDone(true);
    dispatch(editCurrentPage(1));
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <>
      {done && (
        <Done>
          <DoneMessage>
            {prevContent
              ? '게시글 수정이 완료되었습니다.'
              : '게시글 작성이 완료되었습니다.'}
          </DoneMessage>
        </Done>
      )}
      {!done && (
        <FormWrapper>
          <Row className="field">
            <Title className="label">작성자</Title>
            <ColumnWrapper>
              <div className="control">
                <input
                  defaultValue={prevContent ? prevContent.user.name : userName}
                  onChange={onChangeName}
                  className="input"
                  type="text"
                  placeholder="김모모"
                />
              </div>
              <div className="control">
                <input
                  defaultValue={
                    prevContent ? prevContent.user.email : userEmail
                  }
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
                defaultValue={prevContent ? prevContent.password : password}
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
                defaultValue={prevContent ? prevContent.title : title}
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
                defaultValue={prevContent ? prevContent.content : content}
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
