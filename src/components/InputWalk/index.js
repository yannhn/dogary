import {useState} from 'react';

export default function InputWalk({addNewWalkItem, setSubmittedDuration, setSubmittedStartTime}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('00:00');

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			duration: enteredDuration,
			start: enteredStartTime,
		};

		addNewWalkItem(newInput);
		setSubmittedDuration(enteredDuration);
		setSubmittedStartTime(enteredStartTime);
	};

	return (
		<>
			<section>
				<form onSubmit={handleSubmit}>
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
			</section>
		</>
	);
}
