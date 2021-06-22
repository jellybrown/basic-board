import React, { useEffect } from 'react';
import { useState } from 'react';

const useModal = (isMore, initialState = false) => {
  const [opened, setOpened] = useState(initialState);

  // more 컴포넌트에서만 캡쳐링 사용
  useEffect(() => {
    if (!isMore) return;
    const listener = (e) => {
      if (
        e.target.className === 'custom-modal' ||
        e.target.className === 'more-icon'
      ) {
        return;
      }
      setOpened(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  const onToggleModal = () => {
    setOpened((prev) => !prev);
  };

  const onOepnModal = () => {
    setOpened(true);
  };

  const onCloseModal = () => {
    setOpened(false);
  };

  return [opened, onToggleModal, onOepnModal, onCloseModal];
};

export default useModal;
