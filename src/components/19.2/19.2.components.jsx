import axios from "axios";
import React, { useState, useEffect } from "react";

const Exercise = () => {
	const [countries, updateData] = useState();
	const [filteredData, filterData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				"https://intense-mesa-62220.herokuapp.com/restcountries.herokuapp.com/api/v1/"
			);
			updateData(data);
			filterData(data);
		};
		getData();
	}, []);
	const handleInput = (e) => {
		filterData(
			countries.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
		);
	};
	return (
		<div>
			<input type="text" onInput={handleInput} />
			{filteredData.map((country) => {
				return <p key={country.cca2}>{country.name.common}</p>;
			})}
		</div>
	);
};
export default Exercise;
