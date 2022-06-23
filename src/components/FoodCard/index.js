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
	// const fakeData = {amount: 40, time: '07:30'};

	function addNewData(data) {
		setData(prevItem => {
			return [data, ...prevItem];
		});
	}

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

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
				{data.map(item => (
					<FoodInfoContainer key={item.id}>
						<FoodInfo>
							<p>What: DOGNAME ate {item.amount} gram</p>
							<p>When: {item.time}</p>
						</FoodInfo>
						<FoodCounter>current / goal</FoodCounter>
					</FoodInfoContainer>
				))}
			</FoodCardContainer>
			{showForm && <InputFood addNewData={addNewData}></InputFood>}
		</>
	);
}
