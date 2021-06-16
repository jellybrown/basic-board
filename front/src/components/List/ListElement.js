import styled from "styled-components";

export const ListWrapper = styled.div`
  margin-top: 20px;
`;

export const Lists = styled.ul`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border-top: 1px solid #ececec;
`;

export const Item = styled.li`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fafafa;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleAndDay = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  p {
    display: inline-block;
    font-size: 16px;
    margin-right: 13px;
    color: #555555;
  }
  span {
    color: #a6a6a6;
    font-size: 12px;
    line-height: 12px;
  }
`;

export const Tags = styled.div``;

export const Tag = styled.span`
  display: inline-block;
  border: 1px solid #c7c7c7;
  border-radius: 20px;
  color: #a6a6a6;
  background-color: #fff;
  font-size: 12px;
  padding: 0 14px;
  height: 28px;
  line-height: 28px;
  margin-right: 5px;
`;

export const Name = styled.span`
  color: #a6a6a6;
  font-size: 14px;
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PageBackground = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
  background: ${({ currentPage }) =>
    currentPage ? "rgba(0,0,0,0.08)" : "none"};
  border-radius: 5px;
`;

export const Page = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
