import axios from "axios";
import React, { useState, useEffect } from "react";

const Exercise = () => {
	const [movie, updateData] = useState({});
	useEffect(() => {
		async function getData() {
			const { data } = await axios.get("https://swapi.dev/api/films/1/");
			return data;
		}
		updateData(getData());
	}, []);
	return (
		<div>
			<p>{movie.title}</p>
			<p>{movie.producer}</p>
		</div>
	);
};
export default Exercise;
