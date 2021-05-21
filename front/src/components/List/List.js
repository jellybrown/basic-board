import React from 'react';
import {InfoBox, Item, ListWrapper, Name, Tag, Tags, TitleAndDay} from './ListElement';

const List = () => {
    return (
        <ListWrapper>
            <Item>
                <InfoBox>
                    <TitleAndDay>
                        <p>안녕하세요</p>
                        <span>2020/10/10</span>
                    </TitleAndDay>
                    <Tags>
                        <Tag>문의</Tag>
                        <Tag>아무말</Tag>
                    </Tags>
                </InfoBox>
                <Name>김유진</Name>
            </Item>
        </ListWrapper>
    );
};

export default List;