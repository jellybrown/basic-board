import React from "react";
import { Link, useHistory } from "react-router-dom";
import { changeDate } from "../../utils/date";
import {
  InfoBox,
  Item,
  ListWrapper,
  Lists,
  Name,
  Tag,
  Tags,
  TitleAndDay,
} from "./ListElement";

const List = ({ posts }) => {
  const history = useHistory();
  return (
    <ListWrapper>
      <Lists>
        {posts.map((post, index) => (
          <Link to={`/post/${post._id}`} key={index}>
            <Item>
              <InfoBox>
                <TitleAndDay>
                  <p>{post.title}</p>
                  <span>{changeDate(post.createdAt)}</span>
                </TitleAndDay>
                <Tags>
                  <Tag># 문의</Tag>
                  <Tag># 아무말</Tag>
                </Tags>
              </InfoBox>
              <Name>{post.author}</Name>
            </Item>
          </Link>
        ))}
      </Lists>
    </ListWrapper>
  );
};

export default List;
