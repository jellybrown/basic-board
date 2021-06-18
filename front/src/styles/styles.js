import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  width: 3em;
  height: 3em;
  border: 5px solid #f4f6fc;
  border-top: 5px solid #d3defc;
  border-radius: 50%;
  animation: spin 1.5s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;
