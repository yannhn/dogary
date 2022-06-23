import {useState} from 'react';

import {InputFoodContainer} from './styled';

export default function InputFood({addNewData, setSubmittedFoodInput, setSubmittedTimeInput}) {
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [enteredTime, setEnteredTime] = useState('08:00');

	const resetForm = () => {
		setEnteredAmount(0);
		setEnteredTime('');
	};

	const handleSubmit = event => {
		event.preventDefault();
		const newData = {
			amount: parseInt(enteredAmount),
			time: enteredTime,
		};
		console.log(newData);
		addNewData(newData);
		setSubmittedFoodInput(enteredAmount);
		setSubmittedTimeInput(enteredTime);
		resetForm();
	};

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
								value={enteredAmount}
								onChange={event => setEnteredAmount(event.target.value)}
							></input>
							<p>{event => setEnteredAmount(event.target.value)}</p>
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
