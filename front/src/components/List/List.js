import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  // posts.reverse().map((post) => console.log(post));
  const history = useHistory();
  return (
    <ListWrapper>
      <Lists>
        {posts.map((post) => (
          <Item
            key={post._id}
            onClick={() => history.push(`/post/${post._id}`)}
          >
            <InfoBox>
              <TitleAndDay>
                <p>{post.title}</p>
                <span>{post.createdAt}</span>
              </TitleAndDay>
              <Tags>
                <Tag># 문의</Tag>
                <Tag># 아무말</Tag>
              </Tags>
            </InfoBox>
            <Name>{post.author}</Name>
          </Item>
        ))}
      </Lists>
    </ListWrapper>
  );
};

export default List;
