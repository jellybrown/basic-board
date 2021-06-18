import React from 'react';
import { ModalWrapper, Text } from './ModalElement';

const Modal = ({ opened }) => {
  return (
    <ModalWrapper opened={opened}>
      <Text>수정</Text>
      <Text>삭제</Text>
    </ModalWrapper>
  );
};

export default Modal;
