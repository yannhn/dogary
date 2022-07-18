import {Icon} from '@iconify/react';
import {useState} from 'react';

import FormModal from '../FormModal';
import InputGoalForm from '../InputGoalForm';

import {FoodCardButtonGoal} from './styled';

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
			<FoodCardButtonGoal onClick={() => setShowForm(!showForm)}>
				<Icon
					icon="mdi:bullseye-arrow"
					width="1.6rem"
					height="1.6rem"
					color="white"
					alt="add activity"
				/>
			</FoodCardButtonGoal>
			{showForm && (
				<FormModal>
					<InputGoalForm addNewAmount={addNewAmount} cancelForm={cancelForm} />
				</FormModal>
			)}
		</>
	);
}
