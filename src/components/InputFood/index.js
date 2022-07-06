import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputFoodContainer} from './styled';

export default function InputFood({addNewFoodItem, showForm, setShowForm}) {
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [enteredTime, setEnteredTime] = useState('08:00');

	const resetHandler = () => {
		setEnteredAmount(0);
		setEnteredTime('');
	};

	const submitHandler = event => {
		event.preventDefault();
		const newFoodInput = {
			id: nanoid(),
			amount: parseInt(enteredAmount),
			time: enteredTime,
		};
		addNewFoodItem(newFoodInput);
		resetHandler();
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
								onChange={event => setEnteredTime(event.target.value)}
							></input>
						</label>
					</section>
					<section>
						<button type="submit">Add</button>
						<button type="button" onClick={() => setShowForm(!showForm)}>
							cancel
						</button>
					</section>
				</form>
			</InputFoodContainer>
		</>
	);
}
