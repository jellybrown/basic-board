import React, { useEffect } from 'react';
import List from '../components/List/List';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../redux/PostsSlice';
import { ButtonWrapper } from '../components/Form/FormElement';
import { useState } from 'react';
import { Loading, LoadingWrapper } from '../styles/styles';

const Home = () => {
  const page = location.search;
  const regex = /([0-9]+)/g;
  const result = page.match(regex) || [0]; // ?page=2 숫자만 꺼내기
  const posts = useSelector((state) => state.posts.posts);
  const postsCount = useSelector((state) => state.posts.postsCount);
  const { currentPage } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(async () => {
    // currentPost null 필요, 안그러면 글쓸떄 에러남
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
