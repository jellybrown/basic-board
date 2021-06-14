import React from "react";
import {
  Content,
  DetailWrapper,
  Header,
  Info,
  Modal,
  More,
} from "./DetailElement";
import MoreIcon from "../../images/more.svg";
import UserIcon from "../../images/user.svg";
import { changeDate } from "../../utils/date";

const Detail = ({ post }) => {
  return (
    <DetailWrapper>
      <Header>
        <h1>{post.title}</h1>
        <More>
          <img src={MoreIcon} alt="more" />
          <Modal />
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
