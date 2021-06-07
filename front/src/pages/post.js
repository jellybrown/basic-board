import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Detail from "../components/Detail/Detail";
import { loadPost } from "../redux/PostsSlice";

const Post = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(loadPost(id));
  }, []);

  // 스켈레톤 효과 추가하기 06.07
  return <>{!loading && <Detail post={currentPost} />}</>;
};

export default Post;
