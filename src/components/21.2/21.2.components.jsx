import React, { useRef, useState, useEffect } from "react";
import video from "./assets/video/video.mp4";
import "./21.2.styles.css";
const Exercise = () => {
	const videoRef = useRef();
	const [isPlaying, updatePlay] = useState(false);
	useEffect(() => {
		isPlaying ? videoRef.current.play() : videoRef.current.pause();
	}, [isPlaying]);
	return (
		<div className="flex-container">
			<video ref={videoRef}>
				<source src={video} type="video/mp4" />
			</video>
			<button
				type="button"
				onClick={() => {
					updatePlay(!isPlaying);
				}}
			>
				{isPlaying ? "Pause" : "Play"}
			</button>
		</div>
	);
};
export default Exercise;
