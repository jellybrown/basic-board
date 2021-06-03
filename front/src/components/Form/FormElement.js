import styled from "styled-components";

export const Done = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DoneMessage = styled.p`
  margin-top: 5rem;
  text-align: center;
`;

export const FormWrapper = styled.div``;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Title = styled.label`
  width: 150px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  .control {
    flex-basis: 50%;
  }
`;

export const Column = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
