import InputFood from '../InputFood/index.js';

import {
	FoodCardContainer,
	FoodCardButton,
	FoodInfoContainer,
	FoodCardHead,
	FoodCounter,
	FoodInfo,
} from './styled';

export default function FoodCard() {
	return (
		<>
			<FoodCardContainer>
				<FoodCardHead>
					<section>
						<h2>Food</h2>
						<h3>Type of food</h3>
					</section>
					<FoodCardButton>+</FoodCardButton>
				</FoodCardHead>

				<FoodInfoContainer>
					<FoodInfo>
						<p>What: DOGNAME ate 80gram</p>
						<p>When: At 7:30</p>
					</FoodInfo>
					<FoodCounter>current / goal</FoodCounter>
				</FoodInfoContainer>
			</FoodCardContainer>

			<InputFood></InputFood>
		</>
	);
}
