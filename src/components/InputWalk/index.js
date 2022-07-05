import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputWalkContainer, InputWalkForm, InputWalkButton} from './styled';

export default function InputWalk({addNewWalkItem}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('08:00');
	const [resultHours, setResultHours] = useState(0);
	const [resultMinutes, setResultMinutes] = useState(0);

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			id: nanoid(),
			duration: enteredDuration,
			startTime: enteredStartTime,
			resultHours: resultHours + Number(enteredDuration.split(':')[0]),
			resultMinutes: resultMinutes + Number(enteredDuration.split(':')[1]),
		};
		addNewWalkItem(newInput);
		const addHours = Number(enteredDuration.split(':')[0]);
		const addMinutes = Number(enteredDuration.split(':')[1]);
		console.log(addHours);
		console.log(typeof addHours);
		setResultHours(resultHours + addHours);
		setResultMinutes(resultMinutes + addMinutes);
	};

	// const endMinutes = Number(enteredDuration.split(':')[1]);
	// console.log(endMinutes);

	// const addHours = () => {};

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
							defaultValue="08:00"
							value={enteredStartTime}
							onChange={event => setEnteredStartTime(event.target.value)}
						></input>
					</section>
					<InputWalkButton type="submit">add</InputWalkButton>
				</InputWalkForm>
			</InputWalkContainer>
		</>
	);
}
