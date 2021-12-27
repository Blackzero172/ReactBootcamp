import { useEffect, useState } from "react";
import chuck from "../12.1/api/chuck.components";
const Exercise = () => {
	const [selectedCategory, setCategory] = useState("Random");
	const [categories, setCategories] = useState([]);
	const selectCategory = (e) => {
		setCategory(e.target.getAttribute("category"));
	};
	const getCategories = async () => {
		const categories = await chuck.get("categories");
		const capCats = categories.data.map((category) => {
			return category.replace(category.charAt(0), category.charAt(0).toUpperCase());
		});
		capCats.push("Random");
		setCategories(capCats);
	};
	useEffect(() => {
		getCategories().catch((err) => {
			console.error(err);
		});
	});
	const getJoke = async () => {
		let joke;
		if (selectedCategory === "Random") {
			joke = await chuck.get("random");
		} else {
			joke = await chuck.get(`random?category=${selectedCategory.toLowerCase()}`);
		}
		document.querySelector(".joke-text").innerText = joke.data.value;
	};
	return (
		<div>
			<h2>Selected Category: {selectedCategory}</h2>
			<div className="flex-container">
				{categories.map((category) => {
					return (
						<button type="button" category={category} key={category} onClick={selectCategory}>
							{category}
						</button>
					);
				})}
				<button type="button" className="joke-btn" onClick={getJoke}>
					Get Joke
				</button>
			</div>
			<h2 className="joke-text"></h2>
		</div>
	);
};
export default Exercise;
