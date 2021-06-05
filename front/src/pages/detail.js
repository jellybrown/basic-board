import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadPost } from "../redux/PostsSlice";

const Detail = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPost(id));
  }, [id]);

  console.log("c", currentPost);

  return <div>{id}</div>;
};

export default Detail;
