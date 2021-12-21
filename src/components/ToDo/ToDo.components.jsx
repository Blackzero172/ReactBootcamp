import React from "react";
import ToDoList from "./ToDoList/ToDoList.components";
import Header from "./Header/Header.components";
import TaskCreateMenu from "./TaskCreateMenu/TaskCreateMenu.components";
import "./ToDo.styles.css";
class Exercise extends React.Component {
	constructor(props) {
		super(props);
		this.windowRef = React.createRef();
		this.menuRef = React.createRef();
	}
	openPopup = () => {
		this.windowRef.current.classList.remove("hidden");
	};
	createTask = () => {
		if (this.menuRef.current.state.taskInput.length > 0) {
			this.windowRef.current.classList.add("hidden");
		}
	};
	render() {
		return (
			<div className="main-container">
				<Header />
				<ToDoList onClick={this.openPopup} />
				<TaskCreateMenu menuRef={this.windowRef} onClick={this.createTask} ref={this.menuRef} />
			</div>
		);
	}
}
export default Exercise;
