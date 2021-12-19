const Card = ({ ppl }) => {
	console.log(ppl);
	return (
		<div>
			{ppl.map((person) => {
				return (
					<div>
						<p>Name: {person.name}</p>
						<p>Birthday: {person.birthday}</p>
						<p> Fav Foods:</p>
						<ul>
							<li>
								Meats:{" "}
								{person.favoriteFoods.meats.map((food) => {
									return `${food},`;
								})}
							</li>
							<li>
								Fish:{" "}
								{person.favoriteFoods.fish.map((food) => {
									return `${food},`;
								})}
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
export default Card;
