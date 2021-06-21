import React from 'react';
import { Content, DetailWrapper, Header, Info, More } from './DetailElement';
import MoreIcon from '../../images/more.svg';
import UserIcon from '../../images/user.svg';
import { changeDate } from '../../utils/date';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';

const Detail = ({ post }) => {
  const [opened, onToggleModal] = useModal();

  return (
    <DetailWrapper>
      <Header>
        <h1>{post.title}</h1>
        <More className="custom-modal" onClick={onToggleModal}>
          <img src={MoreIcon} className="more-icon" alt="more" />
          <Modal opened={opened} />
        </More>
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
