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
	// const [data, setData] = useState([{amount: 20, time: '07:30'}]);
	const fakeData = {amount: 40, time: '07:30'};

	const [showForm, setShowForm] = useState(false);

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
				<FoodInfoContainer>
					<FoodInfo>
						<p>What: DOGNAME ate {fakeData.amount} gram</p>
						<p>When: {fakeData.time}</p>
					</FoodInfo>
					<FoodCounter>current / goal</FoodCounter>
				</FoodInfoContainer>
			</FoodCardContainer>
			{showForm && <InputFood></InputFood>}
		</>
	);
}

// const handleInfo = () => {
// 	setShowInputInfo(!showInputInfo);
// 	console.log(showInputInfo);
// };

// return (
// 	<Layout>
// 		<Helmet>
// 			<title key="title">My Project</title>
// 			<meta key="description" name="description" content="This is my project" />
// 		</Helmet>
// 		<section>
// 			<button onClick={handleInfo}>
// 				{showInputInfo ? 'hide InputForm' : 'show InputForm'}
// 			</button>
