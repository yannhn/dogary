import {nanoid} from 'nanoid';
import {useState} from 'react';

import AddButton from '../Forms/Buttons/AddButton';
import CancelButton from '../Forms/Buttons/CancelButton';

import {InputWalkContainer, InputWalkForm, InputWalkButtonGroup} from './styled';

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
					<h2>Your dog-walks</h2>
					<section>
						<label htmlFor="duration">How long was your last walk?</label>
						<input
							id="duration"
							type="time"
							value={enteredDuration}
							onChange={event => setEnteredDuration(event.target.value)}
						></input>
						<p>-AND-</p>
						<label htmlFor="startingTime">At what time started your last walk?</label>
						<input
							id="startingTime"
							type="time"
							value={enteredStartTime}
							onChange={event => setEnteredStartTime(event.target.value)}
						></input>
						<label htmlFor="date">When started your last walk?</label>
						<input
							id="date"
							type="date"
							min="2022-07-01"
							max="2022-12-31"
							required
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</section>
					<InputWalkButtonGroup>
						<CancelButton buttonText={'Cancel'} type="button" cancelForm={cancelForm} />
						<AddButton type="submit">add walk</AddButton>
					</InputWalkButtonGroup>
				</InputWalkForm>
				<section>
					<h3>Last submit</h3>
					<p>{message}</p>
				</section>
			</InputWalkContainer>
		</>
	);
}
