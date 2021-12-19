const Names = ({ names }) => {
	return (
		<div>
			{names.map((name) => {
				return <p>{name}</p>;
			})}
		</div>
	);
};
export default Names;
