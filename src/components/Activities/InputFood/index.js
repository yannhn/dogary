import {nanoid} from 'nanoid';
import {useState} from 'react';

import AddButton from '../Form-components/Buttons/AddButton/index';
import CancelButton from '../Form-components/Buttons/CancelButton/index';

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
	LastSubmitSection,
	LastSubmitHeading,
	LastSubmitText,
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
		setEnteredAmount(0);
	};

	return (
		<>
			<InputFoodContainer>
				<InputFoodForm onSubmit={submitHandler}>
					<InputFoodHeader>Enter food</InputFoodHeader>
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
							min="2022-07-18"
							max="2022-12-31"
							value={enteredDate}
							required
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</InputFoodSection>
					<InputFoodButtonGroup>
						<CancelButton buttonText={'Cancel'} type="button" cancelForm={cancelForm} />
						<AddButton buttonText={'Add food'} type="submit" />
					</InputFoodButtonGroup>
				</InputFoodForm>
				{message && (
					<LastSubmitSection>
						<LastSubmitHeading>Good job!</LastSubmitHeading>
						<LastSubmitText>{message}</LastSubmitText>
					</LastSubmitSection>
				)}
			</InputFoodContainer>
		</>
	);
}
