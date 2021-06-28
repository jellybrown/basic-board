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
  width: 340px;
  height: 240px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  .input {
    width: 70%;
    text-align: center;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Message = styled.p`
  margin-bottom: 10px;
`;

export const Input = styled.input``;

export const Error = styled.p`
  color: red;
  font-size: 13px;
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  button {
    font-size: 15px;
    padding: 0 20px;
  }
  button:first-child {
    margin-right: 10px;
  }
`;

export const Button = styled.button``;
