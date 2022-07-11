import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputWalkContainer, InputWalkForm, InputWalkButton} from './styled';

export default function InputWalk({addNewWalkItem, addCounter, cancelForm}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('08:00');
	const [result, setResult] = useState(0);

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
	};

	return (
		<>
			<InputWalkContainer>
				<InputWalkForm onSubmit={handleSubmit}>
					<h3>Your walks</h3>
					<section>
						<label htmlFor="duration">How long?</label>
						<input
							id="duration"
							type="time"
							value={enteredDuration}
							onChange={event => setEnteredDuration(event.target.value)}
						></input>
						<p>-AND-</p>
						<label htmlFor="startingTime">When started</label>
						<input
							id="startingTime"
							type="time"
							value={enteredStartTime}
							onChange={event => setEnteredStartTime(event.target.value)}
						></input>
						<p>DATE (Note: this will only be displayed in history-view)</p>
						<label htmlFor="date">Date of Walk</label>
						<input
							id="date"
							type="date"
							min="2022-07-01"
							max="2022-12-31"
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</section>
					<section>
						<InputWalkButton type="submit">add</InputWalkButton>
						<button type="button" onClick={cancelForm}>
							cancel
						</button>
					</section>
				</InputWalkForm>
			</InputWalkContainer>
		</>
	);
}
