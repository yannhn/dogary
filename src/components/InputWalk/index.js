import {nanoid} from 'nanoid';
import {useState} from 'react';

import AddButton from '../Forms/Buttons/AddButton';
import CancelButton from '../Forms/Buttons/CancelButton';

import {
	InputWalkContainer,
	InputWalkForm,
	InputWalkHeader,
	InputWalkSection,
	InputWalkLabel,
	InputWalkDuration,
	InputWalkStartingTime,
	InputWalkDate,
	InputWalkButtonGroup,
	LastSubmitSection,
	LastSubmitHeading,
	LastSubmitText,
} from './styled';

export default function InputWalk({addNewWalkItem, addCounter, cancelForm}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('08:00');
	const [message, setMessage] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			id: nanoid(),
			duration: enteredDuration,
			startTime: enteredStartTime,
			date: new Date(enteredDate).toDateString(),
		};

		addCounter(newInput);
		addNewWalkItem(newInput);
		setMessage(
			`Your last walk with your dog lasted ${newInput.duration} h/m at ${newInput.startTime} o'clock on ${newInput.date}! Your dog will forever be grateful!`
		);
	};

	return (
		<>
			<InputWalkContainer>
				<InputWalkForm onSubmit={handleSubmit}>
					<InputWalkHeader>Enter walks</InputWalkHeader>
					<InputWalkSection>
						<InputWalkLabel htmlFor="duration">
							How long was your last walk?
						</InputWalkLabel>
						<InputWalkDuration
							id="duration"
							type="time"
							value={enteredDuration}
							required
							onChange={event => setEnteredDuration(event.target.value)}
						/>
					</InputWalkSection>
					<InputWalkSection>
						<InputWalkLabel htmlFor="startingTime">
							At what time started your last walk?
						</InputWalkLabel>
						<InputWalkStartingTime
							id="startingTime"
							type="time"
							value={enteredStartTime}
							required
							onChange={event => setEnteredStartTime(event.target.value)}
						/>
					</InputWalkSection>
					<InputWalkSection>
						<InputWalkLabel htmlFor="date">When started your last walk?</InputWalkLabel>
						<InputWalkDate
							id="date"
							type="date"
							min="2022-07-18"
							max="2022-12-31"
							required
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</InputWalkSection>
					<InputWalkButtonGroup>
						<CancelButton buttonText={'Cancel'} type="button" cancelForm={cancelForm} />
						<AddButton buttonText={'Add walk'} type="submit" />
					</InputWalkButtonGroup>
				</InputWalkForm>
				{message && (
					<LastSubmitSection>
						<LastSubmitHeading>Good job!</LastSubmitHeading>
						<LastSubmitText>{message}</LastSubmitText>
					</LastSubmitSection>
				)}
			</InputWalkContainer>
		</>
	);
}
