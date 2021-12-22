import React from "react";
import ToDoList from "./ToDoList/ToDoList.components";
import Header from "./Header/Header.components";
import TaskCreateMenu from "./TaskCreateMenu/TaskCreateMenu.components";
import "./ToDo.styles.css";
import ListItem from "./ListItem/ListItem.components";
class Exercise extends React.Component {
	constructor(props) {
		super(props);
		this.windowRef = React.createRef();
		this.menuRef = React.createRef();
		this.listRef = React.createRef();
		this.state = { children: [] };
	}
	openPopup = () => {
		this.windowRef.current.classList.remove("hidden");
		this.menuRef.current.inputRef.current.focus();
	};
	createTask = () => {
		const windowRef = this.menuRef.current;
		if (windowRef.state.taskInput.length > 0) {
			this.windowRef.current.classList.add("hidden");
			this.setState({ children: [...this.state.children, windowRef.state.taskInput] });
			windowRef.setState({ taskInput: "" });
		}
	};
	render() {
		return (
			<div className="main-container">
				<Header />
				<ToDoList onClick={this.openPopup} listRef={this.listRef}>
					{this.state.children.map((listItem) => {
						return <ListItem text={listItem} id={this.state.children.indexOf(listItem)} />;
					})}
				</ToDoList>
				<TaskCreateMenu menuRef={this.windowRef} onClick={this.createTask} ref={this.menuRef} />
			</div>
		);
	}
}
export default Exercise;
