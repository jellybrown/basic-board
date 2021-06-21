import React, { useEffect } from 'react';
import { useState } from 'react';

const useModal = (initialState = false) => {
  const [opened, setOpened] = useState(initialState);

  useEffect(() => {
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

  return [opened, onToggleModal];
};

export default useModal;
