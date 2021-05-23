import React from 'react';
import {InfoBox, Item, ListWrapper, Lists, Name, Tag, Tags, TitleAndDay} from './ListElement';

const ListItem = ({post}) => {
    return (
        <Item>
                    <InfoBox>
                        <TitleAndDay>
    <p>{post.title}</p>
                            <span>2020.10.10</span>
                        </TitleAndDay>
                        <Tags>
                            <Tag># 문의</Tag>
                            <Tag># 아무말</Tag>
                        </Tags>
                    </InfoBox>
    <Name>{post.author}</Name>
        </Item>
    )
}

const List = () => {

    const posts = [
        {id:1, title: 'hello', author: 'yujin'},
        {id:2, title: '안농', author: '뀨잉'}]

    return (
        <ListWrapper>
            <Lists>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </Lists>
        </ListWrapper>
    );
};

export default List;