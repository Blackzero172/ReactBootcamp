import React from "react";
import data from "./data.js";
import Name from "./Name/Name.components";
import Card from "./Card/Card.components";
class Exercise extends React.Component {
	state = { names: [], before1990: [] };
	getAllNames = () => {
		this.setState({
			names: data.map((obj) => {
				return obj.name;
			}),
		});
	};
	getBefore1990 = () => {
		const objects = [];
		data.forEach((obj) => {
			let year = obj.birthday;
			year = year.replace("-", "");
			year = year.slice(year.indexOf("-") + 1, year.length);
			if (+year <= 1990) {
				objects.push(obj);
			}
		});
		this.setState({ before1990: objects });
	};
	componentDidMount() {
		this.getAllNames();
		this.getBefore1990();
	}
	render() {
		return (
			<div>
				<Name names={this.state.names} />
				----------------------------------
				<Card ppl={this.state.before1990} />
			</div>
		);
	}
}
export default Exercise;
