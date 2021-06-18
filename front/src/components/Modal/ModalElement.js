import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
  width: 90px;
  border-radius: 8px;
  border: 1px solid #f4f6fc;
  background-color: #fff;
  overflow: hidden;
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
`;

export const Text = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #f4f6fc;
  }
`;
