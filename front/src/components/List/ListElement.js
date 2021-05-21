import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin-top: 20px;
`;

export const Lists = styled.ul`
    width: 100%;
    max-width: 700px;
    margin:0 auto;
    border-top: 1px solid #ECECEC;
    
`;

export const Item = styled.li`
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #ECECEC;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 48px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: #FAFAFA;
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
        color:#555555;
    }
    span {
        color: #A6A6A6;
        font-size: 12px;
    }
`;

export const Tags = styled.div`
    
`;

export const Tag = styled.span`
    display: inline-block;
    border: 1px solid #C7C7C7;
    border-radius: 20px;
    color: #A6A6A6;
    background-color: #fff;
    font-size: 12px;
    padding: 0 14px;
    height: 28px;
    line-height: 28px;
    margin-right: 5px;
`;

export const Name = styled.span`
    color: #A6A6A6; 
    font-size: 14px;

`;