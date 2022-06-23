import {useState} from 'react';

import {InputFoodContainer} from './styled';

export default function InputFood({addNewData, setSubmittedInput}) {
	const [enteredTime, setEnteredTime] = useState('');
	const [showFormContainer, setShowFormContainer] = useState(false);
	const [enteredAmount, setEnteredAmount] = useState(0);

	const handleCloseForm = () => {
		setShowFormContainer(!showFormContainer);
	};

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
		setSubmittedInput(enteredAmount);
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
						<button onClick={handleCloseForm}>Cancel</button>
						<button type="submit">Add</button>
					</section>
				</form>
			</InputFoodContainer>
		</>
	);
}
