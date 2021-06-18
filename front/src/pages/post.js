import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Detail from '../components/Detail/Detail';
import { loadPost } from '../redux/PostsSlice';
import { Loading, LoadingWrapper } from '../styles/styles';

const Post = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(loadPost(id));
  }, []);

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <Detail post={currentPost} />
      )}
    </>
  );
};

export default Post;
