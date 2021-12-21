import React from "react";
import CustomButton from "../CustomButton/CustomButton.components";
import "./TaskCreateMenu.styles.css";
class CreateMenu extends React.Component {
	state = { taskInput: "" };
	onInputChange = (e) => {
		this.setState({ taskInput: e.target.value });
	};
	render() {
		return (
			<div className="create-menu hidden" ref={this.props.menuRef}>
				<div className="window">
					<input type="text" placeholder="input your task..." onInput={this.onInputChange} />
					<CustomButton text="Add" onClick={this.props.onClick} />
				</div>
			</div>
		);
	}
}

export default CreateMenu;
