import React from "react";
import chuck from "./api/chuck.components.jsx";
import "./12.1.styles.css";
class Exercise extends React.Component {
	state = { selectedCategory: "Random", categories: [] };
	selectCategory = (e) => {
		this.setState({ selectedCategory: e.target.getAttribute("category") });
	};
	getCategories = async () => {
		const categories = await chuck.get("categories");
		const capCats = categories.data.map((category) => {
			return category.replace(category.charAt(0), category.charAt(0).toUpperCase());
		});
		capCats.push("Random");
		this.setState({ categories: capCats });
	};
	componentDidMount() {
		this.getCategories().catch((err) => {
			console.error(err);
		});
	}
	getJoke = async () => {
		let joke;
		if (this.state.selectedCategory === "Random") {
			joke = await chuck.get("random");
		} else {
			joke = await chuck.get(`random?category=${this.state.selectedCategory.toLowerCase()}`);
		}
		document.querySelector(".joke-text").innerText = joke.data.value;
	};
	render() {
		return (
			<div>
				<h2>Selected Category: {this.state.selectedCategory}</h2>
				<div className="flex-container">
					{this.state.categories.map((category) => {
						return (
							<button type="button" category={category} key={category} onClick={this.selectCategory}>
								{category}
							</button>
						);
					})}
					<button type="button" className="joke-btn" onClick={this.getJoke}>
						Get Joke
					</button>
				</div>
				<h2 className="joke-text"></h2>
			</div>
		);
	}
}
export default Exercise;
