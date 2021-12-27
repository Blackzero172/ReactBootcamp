import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./19.3.styles.css";
import Spinner from "./Spinner/Spinner.components";
const Exercise = () => {
	const [data, updateData] = useState([]);
	const [term, setTerm] = useState("hooks");
	const inputRef = useRef();
	const resultsRef = useRef();
	const spinnerRef = useRef();
	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get("https://hn.algolia.com/api/v1/search/", {
					params: {
						query: term,
					},
				});
				updateData(data.hits);
				spinnerRef.current.classList.add("hidden");
			} catch (err) {
				console.error(err);
			}
		};
		getData();
	}, [term]);

	const updateTerm = () => {
		setTerm(inputRef.current.value);
		spinnerRef.current.classList.remove("hidden");
	};
	return (
		<div>
			<input type="text" ref={inputRef} defaultValue={term} />
			<button type="button" onClick={updateTerm}>
				Search
			</button>
			<div className="results-container" ref={resultsRef}>
				{data.map((item) => {
					return (
						<a href={item.url} target="_blank" rel="noreferrer" key={item.objectID}>
							{item.title}
						</a>
					);
				})}
			</div>
			<Spinner spinnerRef={spinnerRef} />
		</div>
	);
};
export default Exercise;
