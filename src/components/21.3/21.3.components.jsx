import React, { useRef, useEffect, useState } from "react";
import img1 from "./assets/imgs/PC1.jpg";
import img2 from "./assets/imgs/PC2.png";
import "./21.3.styles.css";
const Exercise = () => {
	const firstImg = useRef();
	const secondImg = useRef();
	const [hovering, setHover] = useState(false);
	useEffect(() => {
		[firstImg, secondImg].forEach((img) => {
			img.current.addEventListener("mouseenter", () => {
				setHover(true);
				img.current.classList.remove("grayscaled");
			});
			img.current.addEventListener("mouseleave", () => {
				setHover(false);
				img.current.classList.add("grayscaled");
			});
		});
	}, []);

	return (
		<div className="flex-container">
			<img src={img1} alt="Personal Computer" className="grayscaled" ref={firstImg} />
			<img src={img2} alt="Personal Computer" className="grayscaled" ref={secondImg} />
		</div>
	);
};
export default Exercise;
