import React from "react";
const Button = ({ text, onClick, children }) => {
	return (
		<button type="button" onClick={onClick}>
			{children} {text}
		</button>
	);
};
export default Button;
