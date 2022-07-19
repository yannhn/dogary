import {Icon} from '@iconify/react';
import {useState} from 'react';

import FoodGoalModal from '../FoodGoalModal';
import FormModal from '../FormModal';
import HistoryModal from '../HistoryModal';
import InputFood from '../InputFood/index.js';
import InputGoalForm from '../InputGoalForm';

import {
	FoodCardContainer,
	FoodInfoContainer,
	FoodCardHeaderGroup,
	FoodCardButtonGroup,
	FoodCardButtonGoal,
	FoodCardButtonHistory,
	FoodCardButtonAdd,
} from './styled';

export default function FoodCard() {
	const [showForm, setShowForm] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [showGoal, setShowGoal] = useState(false);
	const [foodItems, setFoodItems] = useState([]);
	const [foodGoal, setFoodGoal] = useState({});

	const addNewFoodItem = prevItem => {
		const newFoodItems = [...foodItems, prevItem];
		setFoodItems(newFoodItems);
	};

	const onAddNewFoodGoal = prevAmount => {
		const newFoodGoal = {...foodGoal, ...prevAmount};
		setFoodGoal(newFoodGoal);
	};

	const cancelForm = () => {
		setShowForm(!showForm);
	};

	const onCancelHistoryForm = () => {
		setShowHistory(!showHistory);
	};

	const onCancelGoalForm = () => {
		setShowGoal(!showGoal);
	};

	const dates = foodItems.map(foodItem => foodItem.date);
	const uniqueDates = [...new Set(dates)];
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
							{showGoal && (
								<FoodGoalModal>
									<InputGoalForm
										addNewFoodGoal={onAddNewFoodGoal}
										onCancelGoalForm={onCancelGoalForm}
									/>
								</FoodGoalModal>
							)}
							<FoodCardButtonGoal onClick={() => setShowGoal(!showGoal)}>
								<Icon
									icon="mdi:bullseye-arrow"
									width="1.6rem"
									height="1.6rem"
									color="white"
									alt="add activity"
								/>
							</FoodCardButtonGoal>
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
					<p>Dogs gotta eat</p>
				</FoodInfoContainer>
				{foodGoal.amount && <p>Goal: {foodGoal.amount} gram</p>}
				{lastSubmit && foodGoal.amount ? (
					<section>
						<p>Todays sum: {foodSum} gram</p>
						{
							<p>
								{foodSum >= foodGoal.amount
									? 'food goal reached (unless you want to have a chunky boy you should probably stop feeding your dog.)'
									: `missing food: ${foodGoal.amount - foodSum} gram`}
							</p>
						}
						<h4>Last Input</h4>
						<p>How much {lastSubmit.amount} gram</p>
						<p>At: {lastSubmit.time}</p>
					</section>
				) : (
					lastSubmit && (
						<section>
							<section>
								<h4>Last feed</h4>
								<p>Amount: {lastSubmit.amount} gram</p>
								<p>Time: {lastSubmit.time}</p>
							</section>
							<p>Todays sum: {foodSum} gram</p>
						</section>
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
					{uniqueDates
						.sort((a, b) => new Date(b) - new Date(a))
						.map(date => (
							<section key={date}>
								<h3>{date}</h3>
								{foodItems
									.filter(food => food.date === date)
									.map(food => (
										<section key={food.id}>
											<p>Amount: {food.amount} gram</p>
											<p>Time: {food.time}</p>
										</section>
									))}
							</section>
						))}
				</HistoryModal>
			)}
		</>
	);
}
