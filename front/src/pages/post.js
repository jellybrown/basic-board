import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Detail from "../components/Detail/Detail";
import { loadPost } from "../redux/PostsSlice";

const Post = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    dispatch(loadPost(id));
    setLoading(false);
  }, []);

  console.log("c", currentPost);
  console.log("cc", loading);

  return <>{!loading && <Detail post={currentPost} />}</>;
};

export default Post;
