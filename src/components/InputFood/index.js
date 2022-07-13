import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputFoodContainer} from './styled';

export default function InputFood({addNewFoodItem, cancelForm, addLastSubmittedItem}) {
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [enteredTime, setEnteredTime] = useState('08:00');
	const [enteredDate, setEnteredDate] = useState('');
	const [message, setMessage] = useState('');

	const submitHandler = event => {
		event.preventDefault();
		const newFoodInput = {
			id: nanoid(),
			amount: parseInt(enteredAmount),
			time: enteredTime,
			date: new Date(enteredDate).toDateString(),
		};
		addLastSubmittedItem(newFoodInput);
		addNewFoodItem(newFoodInput);
		setMessage(
			`Your dog last ate ${newFoodInput.amount} gram at ${newFoodInput.time} o'clock on ${newFoodInput.date}! Your dog will forever be grateful!`
		);
		setEnteredTime('08:00');
		setEnteredAmount(0);
	};

	return (
		<>
			<InputFoodContainer>
				<form onSubmit={submitHandler}>
					<h4>Your dog</h4>
					<section>
						<label>
							How many gram did the dog eat
							<input
								type="number"
								min="0"
								value={enteredAmount}
								required
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
								required
								onChange={event => setEnteredTime(event.target.value)}
							></input>
						</label>
					</section>
					<section>
						<label htmlFor="date">Date of Food</label>
						<input
							id="date"
							type="date"
							min="2022-07-01"
							max="2022-12-31"
							required
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</section>
					<section>
						<button type="submit">Add</button>
						<button type="button" onClick={cancelForm}>
							cancel
						</button>
					</section>
				</form>
				<h4>Last submit</h4>
				<p>{message}</p>
			</InputFoodContainer>
		</>
	);
}
