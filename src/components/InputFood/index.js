import {useState} from 'react';

import {InputFoodContainer} from './styled';

export default function InputFood({addNewFoodItem, setSubmittedFoodInput, setSubmittedTimeInput}) {
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [enteredTime, setEnteredTime] = useState('08:00');

	const resetForm = () => {
		setEnteredAmount(0);
		setEnteredTime('');
	};

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			amount: parseInt(enteredAmount),
			time: enteredTime,
		};
		addNewFoodItem(newInput);
		setSubmittedFoodInput(enteredAmount);
		setSubmittedTimeInput(enteredTime);
		resetForm();
	};

	const endHours = Number(enteredTime.split(':')[0]);
	console.log(endHours);

	return (
		<>
			<InputFoodContainer>
				<form onSubmit={handleSubmit}>
					<h4>Your dog</h4>
					<section>
						<label>
							How many gram did the dog eat
							<input
								type="number"
								min="0"
								value={enteredAmount}
								onChange={event => setEnteredAmount(event.target.value)}
							></input>
						</label>
					</section>
					<section>
						<label>
							When did the dog eat
							<input
								type="time"
								value={enteredTime}
								defaultValue="08:00"
								onChange={event => setEnteredTime(event.target.value)}
							></input>
						</label>
					</section>
					<section>
						<button type="submit">Add</button>
					</section>
				</form>
			</InputFoodContainer>
		</>
	);
}
