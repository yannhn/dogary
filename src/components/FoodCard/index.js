import {useState} from 'react';

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
	const [foodItem, setFoodItem] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [submittedFoodInput, setSubmittedFoodInput] = useState('');
	const [submittedTimeInput, setSubmittedTimeInput] = useState('');

	function addNewFoodItem(prevItem) {
		const newFoodItems = [...foodItem, prevItem];
		setFoodItem(newFoodItems);
	}

	const todayAmount = foodItem.reduce(
		(previousAmount, currentAmount) => previousAmount + currentAmount.amount,
		0
	);

	return (
		<>
			<FoodCardContainer>
				<FoodCardHead>
					<section>
						<h2>Food</h2>
						<h3>Type of food</h3>
					</section>
					<FoodCardButton
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						{showForm ? '-' : '+'}
					</FoodCardButton>
				</FoodCardHead>
				<FoodInfoContainer>
					<FoodInfo>
						<p>What: {submittedFoodInput} gram</p>
						<p>When: {submittedTimeInput}</p>
					</FoodInfo>
					<FoodCounter>{todayAmount} / goal</FoodCounter>
				</FoodInfoContainer>
			</FoodCardContainer>
			{showForm && (
				<InputFood
					addNewFoodItem={addNewFoodItem}
					setSubmittedFoodInput={setSubmittedFoodInput}
					setSubmittedTimeInput={setSubmittedTimeInput}
				></InputFood>
			)}
		</>
	);
}
