import "./User.styles.css";
const User = ({ thumbnail, name, age }) => {
	return (
		<div className="user-card">
			<p>
				{name} , Age: {age} Years old
			</p>
			<img src={thumbnail} alt="User's Thumbnail" />
		</div>
	);
};
export default User;
