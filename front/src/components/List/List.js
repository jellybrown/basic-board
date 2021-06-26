import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { editCurrentPage, removePost } from '../../redux/PostsSlice';
import { changeDate } from '../../utils/date';
import {
  InfoBox,
  Item,
  ListWrapper,
  Lists,
  Name,
  Tag,
  Tags,
  TitleAndDay,
  Pagination,
  Page,
  PageBackground,
} from './ListElement';

const List = ({ posts, postsCount }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(removePost());
  }, []);

  // pagination
  const perPostCount = 5;
  const totalPage = Math.ceil(postsCount / perPostCount);

  const onClickpage = (number) => {
    history.push(`/?page=${number - 1}`);
    dispatch(editCurrentPage(number));
  };

  const renderPagination = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <PageBackground currentPage={currentPage === i}>
          <Page key={i} onClick={() => onClickpage(i)}>
            {i}
          </Page>
        </PageBackground>
      );
    }
    return pages.map((page) => page);
  };

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
      <Pagination>{renderPagination()}</Pagination>
    </ListWrapper>
  );
};

export default List;
