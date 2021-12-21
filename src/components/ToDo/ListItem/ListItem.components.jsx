import React from "react";
const ListItem = ({ text, isDone }) => {
	return (
		<div>
			<p style={{ textDecoration: isDone ? "line-through" : "none" }}>{text}</p>
		</div>
	);
};
export default ListItem;
