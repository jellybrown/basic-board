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
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(async () => {
    await setLoading(true);
    await dispatch(loadPosts(result[0]));
    await setLoading(false);
  }, [result[0]]);

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
