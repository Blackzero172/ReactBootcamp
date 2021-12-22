import React from "react";
import "./ToDoList.styles.css";
import CustomButton from "../CustomButton/CustomButton.components";

class ToDoList extends React.Component {
	render() {
		return (
			<div className="list-container" ref={this.props.listRef}>
				<CustomButton text="Add ToDo" onClick={this.props.onClick}>
					<i className="fas fa-plus"></i>
				</CustomButton>
				{this.props.children}
			</div>
		);
	}
}
export default ToDoList;
