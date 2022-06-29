import {useState} from 'react';

import {InputWalkContainer} from './styled';

export default function InputWalk({addNewWalkItem}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('00:00');

	// const walkTotal = walkItem.reduce(
	// 	(previousDuration, currentDuration) => previousDuration + currentDuration.duration,
	// 	0
	// );

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			duration: enteredDuration,
			start: enteredStartTime,
		};

		addNewWalkItem(newInput);
		const splitTotal = enteredDuration.split(':').map(Number);
		console.log(splitTotal);
		const total = splitTotal.reduce((previous, current) => previous + current, 0);
		console.log(total);
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
							Starting time
							<input
								type="time"
								value={enteredStartTime}
								onChange={event => setEnteredStartTime(event.target.value)}
							></input>
						</label>
					</section>
					<p>-OR-</p>
					{/* <label>
						TimeFrame (e.g. 12 to 13)
						<input type="time"></input>
					</label> */}
					<button type="submit">add</button>
				</form>
			</InputWalkContainer>
		</>
	);
}
