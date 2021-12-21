import React from "react";
import Product from "../Product/Product.components";
import { Link } from "react-router-dom";
import "./ProductsPage.styles.css";
class ProductsPage extends React.Component {
	render() {
		return (
			<div className="product-page">
				{this.props.products.map((product) => {
					return (
						<Link to={`/products/${product.id}`}>
							<Product product={product} />
						</Link>
					);
				})}
			</div>
		);
	}
}
export default ProductsPage;
