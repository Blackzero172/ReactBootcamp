import React from "react";
const Button = ({ text, onClick, children, style }) => {
	return (
		<button type="button" onClick={onClick} style={style}>
			{children} {text}
		</button>
	);
};
export default Button;
