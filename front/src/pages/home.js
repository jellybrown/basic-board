import React, { useEffect } from "react";
import List from "../components/List/List";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/PostsSlice";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
    console.log(posts);
  }, []);

  return (
    <>
      <List posts={posts} />
      <Link to="/write">
        <button>글쓰기</button>
      </Link>
    </>
  );
};

export default Home;
