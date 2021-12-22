import React from "react";

const CustomButton = ({ text, children, onClick, id, edit }) => {
	return (
		<button type="button" onClick={onClick} id={id} edit={edit}>
			{children}
			{text}
		</button>
	);
};
export default CustomButton;
