import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
const Header = () => {
	return (
		<div className="header">
			<Link to="/">Home</Link>
			<Link to="/products">Products</Link>
		</div>
	);
};
export default Header;
