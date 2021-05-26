import React, { useState } from "react";
//import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWrapper } from "./FormElement";
const Form = () => {
  const [text, setText] = useState();
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <FormWrapper className="field">
      <label className="label">이름</label>
      <div className="name__input">
        <input
          className="input is-success"
          type="text"
          placeholder="김멍멍"
          value={text}
          onChange={onChange}
        />
      </div>
    </FormWrapper>
  );
};

// <FontAwesomeIcon icon={faUser} className="fauser" />

export default Form;
