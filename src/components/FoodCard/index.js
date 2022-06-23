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
	const [enteredAmount, setEnteredAmount] = useState(0);
	// const fakeData = {amount: 40, time: '07:30'};

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
					<FoodCardButton onClick={handleShowForm}>+</FoodCardButton>
				</FoodCardHead>
				<FoodInfoContainer>
					<FoodInfo>
						<p>What: DOGNAME ate {enteredAmount} gram </p>
						<p>When: </p>
					</FoodInfo>
					<FoodCounter>{todayAmount} / goal</FoodCounter>
				</FoodInfoContainer>
			</FoodCardContainer>
			{showForm && (
				<InputFood
					addNewData={addNewData}
					enteredAmount={enteredAmount}
					setEnteredAmount={setEnteredAmount}
				></InputFood>
			)}
		</>
	);
}
