import axios from "axios";
import React, { useState, useEffect } from "react";

const Exercise = () => {
	const [data, updateData] = useState([]);
	const [toggle, updateToggle] = useState(true);
	useEffect(() => {
		const token = axios.CancelToken;
		const source = token.source();
		const getData = async () => {
			const { data } = await axios.get("https://61c2e6c99cfb8f0017a3e752.mockapi.io/GPUs/", {
				cancelToken: source.token,
			});
			updateData(data);
		};
		if (toggle) getData();
		return () => {
			updateData([]);
			source.cancel("The request was stopped by the user ");
		};
	}, [toggle]);

	return (
		<div>
			<input
				type="checkbox"
				onClick={(e) => {
					updateToggle(e.target.checked);
				}}
				defaultChecked
			/>
			{data.map((item) => {
				return (
					<div>
						<p>{item.name}</p>
						<p>{item.price}</p>
					</div>
				);
			})}
		</div>
	);
};
export default Exercise;
