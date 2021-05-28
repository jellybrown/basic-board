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
const Detail = () => {
  return (
    <DetailWrapper>
      <Header>
        <h1>제목입니다</h1>
        <More>
          <img src={MoreIcon} alt="more" />
          <Modal />
        </More>
      </Header>
      <Info>
        <img src={UserIcon} alt="user" />
        <span className="author">YJ</span>
        <span className="date">10.30</span>
      </Info>
      <Content>
        한글 한글아아아아아ㅏ아아아아안녕 Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Suscipit in odit esse adipisci doloribus
        voluptate error quaerat inventore consectetur! Quia!
      </Content>
    </DetailWrapper>
  );
};

export default Detail;
