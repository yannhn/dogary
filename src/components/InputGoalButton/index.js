import {useState} from 'react';

import FoodCard from '../FoodCard';
import FormModal from '../FormModal';
import InputGoalForm from '../InputGoalForm';

export default function InputGoalButton() {
	const [showForm, setShowForm] = useState(false);
	const [submittedAmount, setSubmittedAmount] = useState({});

	const addNewAmount = prevAmount => {
		const newAmount = {...submittedAmount, ...prevAmount};
		setSubmittedAmount(newAmount);
	};

	function cancelForm() {
		setShowForm(!showForm);
	}

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Food Goal</button>
			{showForm && (
				<FormModal>
					<InputGoalForm addNewAmount={addNewAmount} cancelForm={cancelForm} />
				</FormModal>
			)}
			<FoodCard goalAmount={submittedAmount.amount} />
		</>
	);
}
