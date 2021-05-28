import React from "react";
import List from "../components/List/List";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <List />
      <Link to="/write">
        <a>글쓰기</a>
      </Link>
    </>
  );
};

export default Home;
