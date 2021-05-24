import styled from "styled-components";

export const DetailWrapper = styled.section`
  max-width: 600px;
  min-height: 400px;
  margin: 0 auto;
  background-color: #f6f7fa;
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  h1 {
    flex: 1;
    color: #838282;
    font-size: 1.2rem;
  }
`;

export const More = styled.div`
  img {
    width: 15px;
    cursor: pointer;
  }
`;

export const Modal = styled.div``;

export const Info = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  img {
    width: 35px;
  }
  .author {
    font-size: 0.85rem;
    font-weight: 500;
    color: #4b4b4b;
    margin: 0 10px;
  }
  .date {
    font-size: 0.85rem;
    color: #ababab;
  }
`;

export const Content = styled.p`
  color: #838282;
  font-size: 0.95rem;
`;
