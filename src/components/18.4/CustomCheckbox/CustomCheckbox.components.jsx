import React from "react";

const CustomCheckbox = ({ hidden, checked, id, onChange, text }) => {
  if (!hidden)
    return (
      <div>
        <p style={{ display: "inline-block" }}>{text}</p>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      </div>
    );
  else return <></>;
};
export default CustomCheckbox;
