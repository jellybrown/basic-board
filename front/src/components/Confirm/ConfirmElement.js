import styled from 'styled-components';

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
`;

export const ConfirmWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
`;

export const Message = styled.p``;

export const Input = styled.input``;

export const Error = styled.p`
  color: red;
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.button``;
