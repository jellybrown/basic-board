import React from 'react';
import { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { ButtonWrapper } from '../Form/FormElement';
import {
  Bg,
  Button,
  ConfirmWrapper,
  Error,
  Input,
  Message,
} from './ConfirmElement';

const Confirm = ({ opened, onClose, onCheck, error }) => {
  const [text, onChangeText] = useInput();
  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <Bg opened={opened}>
      <ConfirmWrapper>
        <Message>비밀번호를 입력해주세요.</Message>
        <Input value={text} onChange={onChangeText} />
        {error && <Error>비밀번호가 다릅니다.</Error>}
        <ButtonWrapper>
          <Button onClick={onClose}>취소</Button>
          <Button onClick={() => onCheck(text)}>확인</Button>
        </ButtonWrapper>
      </ConfirmWrapper>
    </Bg>
  );
};

export default Confirm;
