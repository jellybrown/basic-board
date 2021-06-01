import React, { useEffect, useState } from "react";

const useInput = (text) => {
  const [input, setInput] = useState(null);

  useEffect(() => {
    setInput(text);
  }, [text]);

  return [input, setInput];
};

export default useInput;
