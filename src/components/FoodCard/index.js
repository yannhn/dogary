import {FoodCardContainer, FoodCardButton, FoodInfoContainer, FoodCardHead} from './styled';

export default function FoodCard() {
	return (
		<FoodCardContainer>
			<FoodCardHead>
				<h2>Food</h2>
				<FoodCardButton>Add new food</FoodCardButton>
			</FoodCardHead>
			<h3>Type of food</h3>
			<FoodInfoContainer>
				<section>
					<p>What: DOGNAME ate 80gram</p>
					<p>When: At 7:30</p>
				</section>
				<p>Counter: current food / goal</p>
			</FoodInfoContainer>
		</FoodCardContainer>
	);
}
