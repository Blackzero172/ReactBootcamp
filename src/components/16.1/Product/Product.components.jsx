import React from "react";
import "./Product.styles.css";
import { Link } from "react-router-dom";

const Product = (props) => {
	const { title, imageUrl, price, size } = props.product;
	return (
		<div className="product">
			<img src={imageUrl} alt={title} className="product-img" />
			<h2>{title}</h2>
			<p>Price: {price}</p>
			<p>Size: {size}</p>
			<Link to="/products/" style={{ display: `${props.linkVisible ? "block" : "none"}` }}>
				{" "}
				<button type="button">Back</button>
			</Link>
		</div>
	);
};

export default Product;
