import React from "react";
import ListItem from "../ListItem/ListItem.components";
import "./ToDoList.styles.css";
import CustomButton from "../CustomButton/CustomButton.components";

class ToDoList extends React.Component {
	render() {
		return (
			<div className="list-container">
				<CustomButton text="Add ToDo" onClick={this.props.onClick}>
					<i className="fas fa-plus"></i>
				</CustomButton>
				<ListItem text="To Do" />
			</div>
		);
	}
}
export default ToDoList;
