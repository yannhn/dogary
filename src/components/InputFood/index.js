import {nanoid} from 'nanoid';
import {useState} from 'react';

import {
	InputFoodContainer,
	InputFoodForm,
	InputFoodHeader,
	InputFoodSection,
	InputFoodLabel,
	InputFoodAmount,
	InputFoodTime,
	InputFoodDate,
	InputFoodButtonGroup,
	CancelButton,
	AddButton,
	LastSubmitSection,
} from './styled';

export default function InputFood({addNewFoodItem, cancelForm}) {
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
				<InputFoodForm onSubmit={submitHandler}>
					<InputFoodHeader>Input food</InputFoodHeader>
					<InputFoodSection>
						<InputFoodLabel htmlFor="food-amount-input">
							How many gram did your dog eat?
						</InputFoodLabel>
						<InputFoodAmount
							id="food-amount-input"
							type="number"
							min="0"
							value={enteredAmount}
							required
							onChange={event => setEnteredAmount(event.target.value)}
						/>
					</InputFoodSection>
					<InputFoodSection>
						<InputFoodLabel htmlFor="food-amount-time">
							At what time did your dog eat?{' '}
						</InputFoodLabel>
						<InputFoodTime
							id="food-amount-time"
							type="time"
							value={enteredTime}
							required
							onChange={event => setEnteredTime(event.target.value)}
						/>
					</InputFoodSection>
					<InputFoodSection>
						<InputFoodLabel htmlFor="food-amount-date">
							When did your dog eat?
						</InputFoodLabel>
						<InputFoodDate
							id="food-amount-date"
							type="date"
							min="2022-07-01"
							max="2022-12-31"
							required
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</InputFoodSection>
					<InputFoodButtonGroup>
						<CancelButton type="button" onClick={cancelForm}>
							Cancel
						</CancelButton>
						<AddButton type="submit">Add food</AddButton>
					</InputFoodButtonGroup>
				</InputFoodForm>
				<LastSubmitSection>
					<h3>Last submit</h3>
					<p>{message}</p>
				</LastSubmitSection>
			</InputFoodContainer>
		</>
	);
}
