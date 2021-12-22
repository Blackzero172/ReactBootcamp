import React from "react";
import "./ListItem.styles.css";
import CustomButton from "../CustomButton/CustomButton.components";

const ListItem = ({ text, isDone, id }) => {
	return (
		<div className="list-item" id={id}>
			<p style={{ textDecoration: isDone ? "line-through" : "none" }}>{text}</p>
			<div className="button-container">
				<CustomButton>
					<i className="fas fa-edit"></i>
				</CustomButton>
				<CustomButton>
					<i className="fas fa-trash"></i>
				</CustomButton>
			</div>
		</div>
	);
};
export default ListItem;
