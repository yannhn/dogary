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

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Food Goal</button>
			{showForm && (
				<FormModal>
					<InputGoalForm
						addNewAmount={addNewAmount}
						showForm={showForm}
						setShowForm={setShowForm}
					/>
				</FormModal>
			)}
			<FoodCard goalAmount={submittedAmount.amount} />
		</>
	);
}
