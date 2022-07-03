import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputWalkContainer} from './styled';

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

	return (
		<>
			<InputWalkContainer>
				<form onSubmit={handleSubmit}>
					<h4>Your walks</h4>
					<section>
						<label>
							How long?
							<input
								type="time"
								value={enteredDuration}
								onChange={event => setEnteredDuration(event.target.value)}
							></input>
						</label>
						<p>-AND-</p>
						<label>
							When started
							<input
								type="time"
								defaultValue="08:00"
								value={enteredStartTime}
								onChange={event => setEnteredStartTime(event.target.value)}
							></input>
						</label>
					</section>
					<button type="submit">add</button>
				</form>
			</InputWalkContainer>
		</>
	);
}
