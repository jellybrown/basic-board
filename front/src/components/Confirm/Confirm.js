import React from 'react';
import { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import {
  Bg,
  Button,
  ConfirmWrapper,
  ButtonWrapper,
  Error,
  Input,
  Message,
  InputWrapper,
} from './ConfirmElement';

const Confirm = ({ opened, onClose, onCheck, error, setError }) => {
  const [text, onChangeText, setText] = useInput();
  useEffect(() => {
    if (!opened) {
      setText('');
      setError(false);
    }
  }, [opened]);

  return (
    <Bg opened={opened}>
      <ConfirmWrapper>
        <InputWrapper>
          <Message>비밀번호를 입력해주세요.</Message>
          <input
            className="input"
            type="password"
            placeholder="****"
            value={text}
            onChange={onChangeText}
          />
          {error && <Error>비밀번호를 다시 확인해주세요.</Error>}
        </InputWrapper>
        <ButtonWrapper>
          <button className="button is-light" onClick={onClose}>
            취소
          </button>
          <button className="button is-info" onClick={() => onCheck(text)}>
            확인
          </button>
        </ButtonWrapper>
      </ConfirmWrapper>
    </Bg>
  );
};

export default Confirm;
