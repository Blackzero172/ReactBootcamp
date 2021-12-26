import React from "react";

const CustomInput = ({ value, onInput, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" value={value} onInput={onInput} name={label} />
    </div>
  );
};
export default CustomInput;
