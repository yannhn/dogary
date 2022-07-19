import {nanoid} from 'nanoid';
import {useState} from 'react';

import {
	GoalForm,
	InputGoalHeader,
	InputGoalSection,
	InputGoalLabel,
	InputGoalAmount,
	InputGoalButtonGroup,
} from './styled';

export default function InputGoalForm({onCancelGoalForm, addNewFoodGoal}) {
	const [amount, setAmount] = useState(0);

	const submitHandler = event => {
		event.preventDefault();

		const newAmount = {
			id: nanoid(),
			amount: amount,
		};

		addNewFoodGoal(newAmount);
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
				<button type="button" onClick={onCancelGoalForm}>
					Get back
				</button>
				<button type="submit">add</button>
			</InputGoalButtonGroup>
		</GoalForm>
	);
}
