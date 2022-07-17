import {useState} from 'react';

import AddButton from '../Forms/Buttons/AddButton';
import CancelButton from '../Forms/Buttons/CancelButton';

import {
	GoalForm,
	InputGoalHeader,
	InputGoalSection,
	InputGoalLabel,
	InputGoalAmount,
	InputGoalButtonGroup,
} from './styled';

export default function InputGoalForm({addNewAmount, cancelForm}) {
	const [amount, setAmount] = useState(0);

	const submitHandler = event => {
		event.preventDefault();
		const newAmount = {
			amount: amount,
		};
		addNewAmount(newAmount);
		setAmount(0);
	};

	return (
		<GoalForm onSubmit={submitHandler}>
			<InputGoalHeader>How much food should your dog eat today?</InputGoalHeader>
			<InputGoalSection>
				<InputGoalLabel htmlFor="enterAmount">
					Input your goal amount in gram
				</InputGoalLabel>
				<InputGoalAmount
					id="enterAmount"
					type="number"
					value={amount}
					min="0"
					onChange={event => setAmount(event.target.value)}
				/>
			</InputGoalSection>
			<InputGoalButtonGroup>
				<CancelButton type="button" buttonText={'Cancel'} cancelForm={cancelForm} />
				<AddButton type="submit" buttonText={'Add food goal'} cancelForm={cancelForm} />
			</InputGoalButtonGroup>
		</GoalForm>
	);
}
