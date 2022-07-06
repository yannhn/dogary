import {useState} from 'react';

import FoodCard from '../FoodCard';
import InputGoalForm from '../InputGoalForm';

export default function InputGoalButton() {
	const [showForm, setShowForm] = useState(false);
	const [submittedAmount, setSubmittedAmount] = useState({});

	const addNewAmount = prevAmount => {
		const newAmount = {...submittedAmount, ...prevAmount};
		setSubmittedAmount(newAmount);
	};

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Food Goal</button>
			{showForm && <InputGoalForm addNewAmount={addNewAmount} />}
			<FoodCard goalAmount={submittedAmount.amount} />
		</>
	);
}
