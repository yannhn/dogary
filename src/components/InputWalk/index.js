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
} from './styled';

export default function InputWalk({addNewWalkItem, addCounter, cancelForm}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('08:00');
	const [result, setResult] = useState(0);
	const [message, setMessage] = useState('');

	const [enteredDate, setEnteredDate] = useState('');

	const convertHoursToMinute = enteredDuration => {
		const hours = enteredDuration.split(':')[0];
		const minutes = enteredDuration.split(':')[1];
		return parseInt(hours) + Number(minutes / 60);
	};

	const showHours = convertHoursToMinute(enteredDuration);
	const showMinutes = showHours * 60;

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			id: nanoid(),
			duration: enteredDuration,
			startTime: enteredStartTime,
			result: result + showMinutes,
			date: new Date(enteredDate).toDateString(),
		};

		addCounter(newInput);
		addNewWalkItem(newInput);
		setResult(result + showMinutes);
		setMessage(
			`Your last walk with your dog lasted ${newInput.duration} h/m at ${newInput.startTime} o'clock on ${newInput.date}! Your dog will forever be grateful!`
		);
	};

	return (
		<>
			<InputWalkContainer>
				<InputWalkForm onSubmit={handleSubmit}>
					<InputWalkHeader>Your dog-walks</InputWalkHeader>
					<InputWalkSection>
						<InputWalkLabel htmlFor="duration">
							How long was your last walk?
						</InputWalkLabel>
						<InputWalkDuration
							id="duration"
							type="time"
							value={enteredDuration}
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
							onChange={event => setEnteredStartTime(event.target.value)}
						/>
					</InputWalkSection>
					<InputWalkSection>
						<InputWalkLabel htmlFor="date">When started your last walk?</InputWalkLabel>
						<InputWalkDate
							id="date"
							type="date"
							min="2022-07-01"
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
				<LastSubmitSection>
					<h3>Last submit</h3>
					<p>{message}</p>
				</LastSubmitSection>
			</InputWalkContainer>
		</>
	);
}
