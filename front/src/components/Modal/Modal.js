import React from 'react';
import { ModalWrapper, Text } from './ModalElement';

const Modal = ({ opened, onEdit, onDelete }) => {
  return (
    <ModalWrapper opened={opened}>
      <Text onClick={onEdit}>수정</Text>
      <Text onClick={onDelete}>삭제</Text>
    </ModalWrapper>
  );
};

export default Modal;
