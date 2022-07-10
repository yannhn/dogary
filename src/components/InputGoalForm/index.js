import {useState} from 'react';

import {InputGoalContainer, GoalForm} from './styled';

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
		<InputGoalContainer>
			<GoalForm onSubmit={submitHandler}>
				<h2>How much food should the dog eat in a day?</h2>
				<label htmlFor="enterAmount">Input your goal amount in gram</label>
				<input
					id="enterAmount"
					type="number"
					value={amount}
					min="0"
					onChange={event => setAmount(event.target.value)}
				/>
				<section>
					<button>Add</button>
					<button type="button" onClick={cancelForm}>
						cancel
					</button>
				</section>
			</GoalForm>
		</InputGoalContainer>
	);
}
