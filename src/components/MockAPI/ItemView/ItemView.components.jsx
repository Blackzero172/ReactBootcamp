import React from "react";
import CustomButton from "../CustomButton/CustomButton.components";
import "./ItemView.styles.css";
const ItemView = ({ item, deleteItem, editItem }) => {
	const { name, price, imageURL, id } = item;
	return (
		<div style={{ border: "3px solid black" }} className="item-view">
			<h3>{name}</h3>
			<p>{price}$</p>
			<img src={imageURL} alt=" Thumbnail" />
			<p>ID: {id}</p>
			<div className="button-container">
				<CustomButton onClick={editItem} id={id} edit="true">
					<i className="fas fa-edit" style={{ pointerEvents: "none" }}></i>
				</CustomButton>
				<CustomButton onClick={deleteItem} id={id}>
					<i className="fas fa-trash" style={{ pointerEvents: "none" }}></i>
				</CustomButton>
			</div>
		</div>
	);
};
export default ItemView;
