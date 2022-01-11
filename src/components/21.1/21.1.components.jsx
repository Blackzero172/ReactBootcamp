import React, { useState, useEffect, useRef } from "react";
import "./21.1.styles.css";
const Exercise = () => {
	const [editMode, updateMode] = useState(false);
	const buttonRef = useRef();
	const inputRef = useRef();
	useEffect(() => {
		if (editMode) {
			inputRef.current.classList.remove("hidden");
			inputRef.current.focus();
			inputRef.current.value = "";
		} else inputRef.current.classList.add("hidden");
	}, [editMode]);
	return (
		<div className="flex-container">
			<button
				type="button"
				ref={buttonRef}
				onClick={() => {
					updateMode(!editMode);
				}}
			>
				{editMode ? "Save" : "Edit"}
			</button>
			<input type="text" ref={inputRef} className="hidden" />
		</div>
	);
};
export default Exercise;
