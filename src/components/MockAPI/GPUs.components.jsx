import React from "react";
import api from "./API/api";
import Spinner from "./Spinner/Spinner.components";
import ItemView from "./ItemView/ItemView.components";
import CustomInput from "./CustomInput/CustomInput.components";
import CustomButton from "./CustomButton/CustomButton.components";
import Popup from "./Popup/Popup.components";
import "./GPUs.styles.css";
import axios from "axios";
class App extends React.Component {
	spinnerRef = React.createRef();
	createMenuRef = React.createRef();
	editMenuRef = React.createRef();
	nameInput = React.createRef();
	priceInput = React.createRef();
	urlInput = React.createRef();
	state = { loading: false, data: [], currentItem: {} };
	showHideSpinner = () => {
		if (this.state.loading) this.spinnerRef.current.classList.remove("hidden");
		else if (!this.state.loading) this.spinnerRef.current.classList.add("hidden");
	};
	setupEdit = (e) => {
		const [nameInput, priceInput, urlInput, menuRef] = [
			this.nameInput.current,
			this.priceInput.current,
			this.urlInput.current,
			this.createMenuRef.current,
		];
		let editItem = {};
		this.state.data.forEach((item) => {
			if (Object.values(item).includes(e.target.id)) editItem = item;
		});
		this.setState({ currentItem: editItem });
		nameInput.value = editItem.name;
		priceInput.value = editItem.price;
		urlInput.value = editItem.imageURL;
		menuRef.classList.remove("hidden");
	};
	showHideMenu = async (e) => {
		console.log(e);
		if (!this.state.loading) {
			const [nameInput, priceInput, urlInput, menuRef] = [
				this.nameInput.current,
				this.priceInput.current,
				this.urlInput.current,
				this.createMenuRef.current,
			];
			if (
				nameInput.value !== "" ||
				priceInput.value !== "" ||
				(urlInput.value !== "" && !menuRef.classList.contains("hidden"))
			) {
				this.setState({ loading: true }, () => {
					this.showHideSpinner();
					this.checkData(urlInput.value);
				});
			} else menuRef.classList.remove("hidden");
		}
	};
	checkData = async (url) => {
		const menuRef = this.createMenuRef.current;

		try {
			if (url.includes("https")) url.slice(7);
			await axios.get("https://intense-mesa-62220.herokuapp.com/" + url);
			menuRef.classList.add("hidden");
			if (this.state.currentItem === {}) await this.postItem();
			else await this.postItem(this.state.currentItem.id);
			this.getData();
		} catch {
			console.error("Image not Found");
			this.setState({ loading: false }, this.showHideSpinner);
		}
	};
	getData = async () => {
		this.setState({ loading: true }, this.showHideSpinner);
		const res = await api.get();
		this.setState({ loading: false, data: res.data }, this.showHideSpinner);
	};
	postItem = async (id) => {
		const [nameInput, priceInput, urlInput] = [
			this.nameInput.current,
			this.priceInput.current,
			this.urlInput.current,
		];
		if (id)
			await api.put(id, {
				name: nameInput.value,
				price: priceInput.value,
				imageURL: urlInput.value,
			});
		else
			await api.post("", {
				name: nameInput.value,
				price: priceInput.value,
				imageURL: urlInput.value,
			});

		nameInput.value = "";
		priceInput.value = "";
		urlInput.value = "";
	};
	deleteItem = async (e) => {
		this.setState({ loading: true }, this.showHideSpinner);
		await api.delete(e.target.id);
		this.getData();
	};
	componentDidMount() {
		this.getData();
	}
	render() {
		return (
			<div>
				<div className="flex-container">
					<CustomButton text="Add Product" onClick={this.showHideMenu}>
						<i className="fas fa-plus"></i>
					</CustomButton>
				</div>
				<div className="list-container">
					{this.state.data.map((item) => {
						return (
							<ItemView item={item} key={item.id} deleteItem={this.deleteItem} editItem={this.setupEdit} />
						);
					})}
				</div>
				<Spinner spinnerRef={this.spinnerRef} />
				<Popup menuRef={this.createMenuRef}>
					<h3>Add Product </h3>
					<CustomInput type="text" placeHolder="Type in the name of the product" ref={this.nameInput} />
					<CustomInput type="number" placeHolder="Type in the price of the product" ref={this.priceInput} />
					<CustomInput type="text" placeHolder="Place URL of Image Here" ref={this.urlInput} />
					<CustomButton text="Add" onClick={this.showHideMenu}>
						<i className="fas fa-plus"></i>
					</CustomButton>
				</Popup>
			</div>
		);
	}
}
export default App;
