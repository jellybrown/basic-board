import React from 'react';
import { Content, DetailWrapper, Header, Info, More } from './DetailElement';
import MoreIcon from '../../images/more.svg';
import UserIcon from '../../images/user.svg';
import { changeDate } from '../../utils/date';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import Confirm from '../Confirm/Confirm';
import { useState } from 'react';

const Detail = ({ post }) => {
  const [opened, onToggleModal] = useModal(true);
  const [openedConfirm, _, onOpenConfirm, onCloseConfirm] = useModal(false);
  const [passwordError, setPasswordError] = useState(false);

  const onEdit = () => {
    onToggleModal();
    onOpenConfirm();
  };

  const onCheckPassword = (value) => {
    console.log(value, post);
    if (post.password !== value) setPasswordError(true);
    else console.log('비밀번호 ㅇㅇ'); // push하기
  };

  return (
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
  );
};

export default Detail;
