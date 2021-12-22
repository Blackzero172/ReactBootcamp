import React from "react";
import CustomButton from "../CustomButton/CustomButton.components";
import "./TaskCreateMenu.styles.css";
class CreateMenu extends React.Component {
	state = { taskInput: "" };
	inputRef = React.createRef();
	onInputChange = (e) => {
		this.setState({ taskInput: e.target.value });
	};
	render() {
		return (
			<div className="create-menu hidden" ref={this.props.menuRef}>
				<div className="window">
					<CustomButton
						style={{ position: "absolute", left: "5px", top: "5px" }}
						onClick={() => {
							this.props.menuRef.current.classList.add("hidden");
							this.setState({ taskInput: "" });
						}}
					>
						<i className="fas fa-minus"></i>
					</CustomButton>
					<input
						type="text"
						placeholder="input your task..."
						onInput={this.onInputChange}
						value={this.state.taskInput}
						ref={this.inputRef}
					/>
					<CustomButton text="Add" onClick={this.props.onClick} />
				</div>
			</div>
		);
	}
}

export default CreateMenu;
