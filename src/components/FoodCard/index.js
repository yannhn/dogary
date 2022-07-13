import {useState} from 'react';

import FormModal from '../FormModal';
import HistoryModal from '../HistoryModal';
import InputFood from '../InputFood/index.js';

import {FoodCardContainer, FoodCardButton, FoodInfoContainer, FoodCardHead} from './styled';

export default function FoodCard({goalAmount}) {
	const [showForm, setShowForm] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [foodItems, setFoodItems] = useState([]);
	const [lastSubmittedFoodItem, setLastSubmittedFoodItem] = useState({});

	const dates = foodItems.map(foodItem => foodItem.date);
	const uniqueDates = [...new Set(dates)];

	function addNewFoodItem(prevItem) {
		const newFoodItems = [...foodItems, prevItem];
		setFoodItems(newFoodItems);
	}

	function addLastSubmittedItem(prevItem) {
		const newItem = {...foodItems, ...prevItem};
		setLastSubmittedFoodItem(newItem);
	}

	function cancelForm() {
		setShowForm(!showForm);
	}

	function onCancelHistoryForm() {
		setShowHistory(!showHistory);
	}

	return (
		<>
			<FoodCardContainer>
				<FoodCardHead>
					<section>
						<h2>Food</h2>
						<h3>Type of food</h3>
						<p>Goal: {goalAmount} gram</p>
					</section>
					<button
						onClick={() => {
							setShowHistory(!showHistory);
						}}
					>
						{showHistory ? 'Hide History' : 'Show History'}
					</button>
					<FoodCardButton
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						{showForm ? '-' : '+'}
					</FoodCardButton>
				</FoodCardHead>
				<FoodInfoContainer>
					<p>How much: {lastSubmittedFoodItem.amount} gram</p>
					<p>At: {lastSubmittedFoodItem.time}</p>
				</FoodInfoContainer>
			</FoodCardContainer>
			{showForm && (
				<FormModal>
					<InputFood
						addNewFoodItem={addNewFoodItem}
						cancelForm={cancelForm}
						addLastSubmittedItem={addLastSubmittedItem}
					></InputFood>
				</FormModal>
			)}
			{showHistory && (
				<HistoryModal onCancelHistoryForm={onCancelHistoryForm}>
					{uniqueDates
						.sort((a, b) => new Date(b) - new Date(a))
						.map(date => (
							<section key={date}>
								<h2>{date}</h2>
								{foodItems
									.filter(food => food.date === date)
									.map(food => (
										<section key={food.id}>
											<p>Amount: {food.amount}</p>
											<p>When: {food.time}</p>
										</section>
									))}
							</section>
						))}
				</HistoryModal>
			)}
		</>
	);
}
