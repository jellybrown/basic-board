import React, { useEffect, useState } from "react";

const useInput = (initialValue = null) => {
  const [input, setInput] = useState(initialValue);

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  return [input, onChangeValue, setInput];
};

export default useInput;
