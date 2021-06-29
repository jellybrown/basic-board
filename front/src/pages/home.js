import React, { useEffect } from 'react';
import List from '../components/List/List';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../redux/PostsSlice';
import { useState } from 'react';
import { Loading, LoadingWrapper } from '../styles/styles';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  const postsCount = useSelector((state) => state.posts.postsCount);
  const { currentPage } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(async () => {
    await setLoading(true);
    await dispatch(loadPosts(currentPage - 1));
    await setLoading(false);
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          <Loading></Loading>
        </LoadingWrapper>
      ) : (
        <List posts={posts} postsCount={postsCount} />
      )}

      <ButtonWrapper>
        <Link to="/write">
          <button className="button is-info">글쓰기</button>
        </Link>
      </ButtonWrapper>
    </>
  );
};

export default Home;
