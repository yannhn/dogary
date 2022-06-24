import {
	FoodCardContainer,
	FoodCardButton,
	FoodInfoContainer,
	FoodCardHead,
	FoodCounter,
	FoodInfo,
} from './styled';

export default function WalkCard() {
	return (
		<>
			<FoodCardContainer>
				<FoodCardHead>
					<section>
						<h2>Walks</h2>
					</section>
					<FoodCardButton>+</FoodCardButton>
				</FoodCardHead>
				<FoodInfoContainer>
					<FoodInfo>
						<p>Duration: 45 minutes</p>
						<p>When: 10:45 - 11:30</p>
					</FoodInfo>
					<FoodCounter>45 minutes / goal</FoodCounter>
				</FoodInfoContainer>
			</FoodCardContainer>
		</>
	);
}
