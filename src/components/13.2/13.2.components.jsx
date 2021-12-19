import axios from "axios";
import React from "react";
import User from "./User/User.components";
import "./13.2.styles.css";
class Exercise extends React.Component {
	state = { users: [], filteredUsers: [] };
	getUsers = async () => {
		const users = await axios.get("https://randomuser.me/api/?results=10");
		users.data.results.forEach((user) => {
			user.name = `${user.name.title}. ${user.name.first} ${user.name.last}`;
		});
		this.setState({ users: users.data.results, filteredUsers: users.data.results });
	};
	componentDidMount() {
		this.getUsers();
	}
	filterUsers = (e) => {
		const filtered = this.state.users.filter((user) => {
			return user.name.includes(e.target.value);
		});
		this.setState({ filteredUsers: filtered });
	};
	render() {
		return (
			<div className="flex-container">
				<input type="text" name="searchbar" id="searchbar" onInput={this.filterUsers} />
				<div className="cards-container">
					{this.state.filteredUsers.map((user) => {
						return (
							<User
								thumbnail={user.picture.large}
								name={user.name}
								age={user.dob.age}
								key={user.login.uuid}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Exercise;
