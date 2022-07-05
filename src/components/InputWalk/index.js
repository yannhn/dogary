import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputWalkContainer, InputWalkForm, InputWalkButton} from './styled';

export default function InputWalk({addNewWalkItem}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('08:00');

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			id: nanoid(),
			duration: enteredDuration,
			startTime: enteredStartTime,
		};

		addNewWalkItem(newInput);
	};

	const endHours = Number(enteredDuration.split(':')[0]);
	console.log(endHours);

	const endMinutes = Number(enteredDuration.split(':')[1]);
	console.log(endMinutes);

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
