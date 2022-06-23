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
	const [data, setData] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [submittedFoodInput, setSubmittedFoodInput] = useState(null);
	const [submittedTimeInput, setSubmittedTimeInput] = useState(null);

	function addNewData(data) {
		setData(prevItem => {
			return [data, ...prevItem];
		});
	}

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	const todayAmount = data.reduce(
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
					<FoodCardButton onClick={handleShowForm}>{showForm ? '-' : '+'}</FoodCardButton>
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
					addNewData={addNewData}
					setSubmittedFoodInput={setSubmittedFoodInput}
					setSubmittedTimeInput={setSubmittedTimeInput}
				></InputFood>
			)}
		</>
	);
}
