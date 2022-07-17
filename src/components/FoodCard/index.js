import {Icon} from '@iconify/react';
import {useState} from 'react';

import BackgroundHistory from '../BackgroundHistory';
import FormModal from '../FormModal';
import HistoryModal from '../HistoryModal';
import InputFood from '../InputFood/index.js';
import InputGoalButton from '../InputGoalButton';

import {
	FoodCardContainer,
	FoodInfoContainer,
	FoodCardHeaderGroup,
	FoodCardButtonGroup,
	FoodCardButtonHistory,
	FoodCardButtonAdd,
} from './styled';

export default function FoodCard({goalAmount}) {
	const [showForm, setShowForm] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [foodItems, setFoodItems] = useState([]);

	const dates = foodItems.map(foodItem => foodItem.date);
	const uniqueDates = [...new Set(dates)];

	const addNewFoodItem = prevItem => {
		const newFoodItems = [...foodItems, prevItem];
		setFoodItems(newFoodItems);
	};

	const cancelForm = () => {
		setShowForm(!showForm);
	};

	const onCancelHistoryForm = () => {
		setShowHistory(!showHistory);
	};

	const lastSubmit = foodItems[foodItems.length - 1];

	const foodSum = foodItems.reduce(
		(total, currentValue) => (total = total + currentValue.amount),
		0
	);

	return (
		<>
			<FoodCardContainer>
				<FoodInfoContainer>
					<FoodCardHeaderGroup>
						<h2>Food</h2>
						<FoodCardButtonGroup>
							<InputGoalButton />
							<FoodCardButtonHistory
								onClick={() => {
									setShowHistory(!showHistory);
								}}
							>
								<Icon
									icon="mdi:history"
									width="1.6rem"
									height="1.6rem"
									color="white"
									alt="show history"
								/>
							</FoodCardButtonHistory>
							<FoodCardButtonAdd
								onClick={() => {
									setShowForm(!showForm);
								}}
							>
								<Icon
									icon="mdi:plus-circle"
									width="1.6rem"
									height="1.6rem"
									color="white"
									alt="add activity"
								/>
							</FoodCardButtonAdd>
						</FoodCardButtonGroup>
					</FoodCardHeaderGroup>
					<p>A dogs gotta eat</p>
				</FoodInfoContainer>
				{goalAmount && <p>Goal: {goalAmount} gram</p>}
				{lastSubmit && goalAmount ? (
					<FoodInfoContainer>
						<p>Todays sum: {foodSum} gram</p>
						{
							<p>
								{foodSum >= goalAmount
									? 'food goal reached (unless you want to have a chunky boy you should probably stop feeding your dog.)'
									: `missing food: ${goalAmount - foodSum} gram`}
							</p>
						}
						<h4>Last Input</h4>
						<p>How much {lastSubmit.amount} gram</p>
						<p>At: {lastSubmit.time}</p>
					</FoodInfoContainer>
				) : (
					lastSubmit && (
						<FoodInfoContainer>
							<p>Todays sum: {foodSum} gram</p>
							<h4>Last Input</h4>
							<p>How much {lastSubmit.amount} gram</p>
							<p>At: {lastSubmit.time}</p>
						</FoodInfoContainer>
					)
				)}
			</FoodCardContainer>
			{showForm && (
				<FormModal>
					<InputFood addNewFoodItem={addNewFoodItem} cancelForm={cancelForm}></InputFood>
				</FormModal>
			)}
			{showHistory && (
				<HistoryModal onCancelHistoryForm={onCancelHistoryForm}>
					<BackgroundHistory />
					{uniqueDates
						.sort((a, b) => new Date(b) - new Date(a))
						.map(date => (
							<section key={date}>
								<h3>{date}</h3>
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
