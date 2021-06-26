import React from 'react';
import { Content, DetailWrapper, Header, Info, More } from './DetailElement';
import MoreIcon from '../../images/more.svg';
import UserIcon from '../../images/user.svg';
import { changeDate } from '../../utils/date';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import Confirm from '../Confirm/Confirm';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Detail = ({ post }) => {
  const [opened, onToggleModal] = useModal(true);
  const [openedConfirm, _, onOpenConfirm, onCloseConfirm] = useModal(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();

  const onEdit = () => {
    setIsEdit(true);
    onToggleModal();
    onOpenConfirm();
  };

  const requireEdit = () => {
    history.push(`/post/edit/${post._id}`);
  };

  const requireDelete = () => {
    console.log('삭제 예정');
  };

  const onCheckPassword = (value) => {
    console.log(value, post);
    if (post.password !== value) return setPasswordError(true);
    if (isEdit) requireEdit();
    else requireDelete();

    //else console.log('비밀번호 ㅇㅇ'); // push하기
  };

  return (
    <>
      {post && (
        <DetailWrapper>
          <Header>
            <h1>{post.title}</h1>
            <More className="custom-modal" onClick={onToggleModal}>
              <img src={MoreIcon} className="more-icon" alt="more" />
              <Modal opened={opened} onEdit={onEdit} />
            </More>
            <Confirm
              opened={openedConfirm}
              onClose={onCloseConfirm}
              onCheck={onCheckPassword}
              error={passwordError}
            />
          </Header>
          <Info>
            <img src={UserIcon} alt="user" />
            <span className="author">{post.user && post.user.name}</span>
            <span className="date">{changeDate(post.createdAt)}</span>
          </Info>
          <Content>{post.content}</Content>
        </DetailWrapper>
      )}
    </>
  );
};

export default Detail;
