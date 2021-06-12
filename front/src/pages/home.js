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

  const ButtinWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0;
  `;

  return (
    <>
      <List posts={posts} />
      <ButtinWrapper>
        <Link to="/write">
          <button className="button is-info">글쓰기</button>
        </Link>
      </ButtinWrapper>
    </>
  );
};

export default Home;
