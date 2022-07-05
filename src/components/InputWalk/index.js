import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputWalkContainer, InputWalkForm, InputWalkButton} from './styled';

export default function InputWalk({addNewWalkItem, addCounter}) {
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('08:00');
	const [result, setResult] = useState(0);

	// const [resultMinutes, setResultMinutes] = useState(0);
	// const [result, setResult] = useState(0);

	// const addTime = () => {
	// 	const addHours = Number(enteredDuration.split(':')[0]);
	// 	const addMinutes = Number(enteredDuration.split(':')[1]);
	// 	if (resultMinutes < 60) {
	// 		setResultHours(resultHours + 1);
	// 		setResultMinutes(resultMinutes - resultMinutes);
	// 	} else {
	// 		setResultHours(resultHours + addHours);
	// 		setResultMinutes(resultMinutes + addMinutes);
	// 	}
	// };

	// const convertHoursToMinute = enteredDuration => {
	// 	const addHours = enteredDuration.split(':')[0];
	// 	const addMinutes = enteredDuration.split(':')[1];
	// 	return parseInt(addHours) + Number(addMinutes / 60);
	// };
	// const convertMinsToTime = mins => {
	// 	let hours = Math.floor(mins / 60);
	// 	let minutes = mins % 60;
	// 	minutes = minutes < 10 ? '0' + minutes : minutes;
	// 	return `${hours}hrs:${minutes}mins`;
	// };
	// const hrs = convertHoursToMinute(enteredDuration);
	// const minutes = hrs * 60;

	// function addTimes(t0, t1) {
	// 	return timeFromMins(timeToMins(t0) + timeToMins(t1));
	// }

	// console.log(addTimes());

	const handleSubmit = event => {
		event.preventDefault();
		const newInput = {
			id: nanoid(),
			duration: enteredDuration,
			startTime: enteredStartTime,
			result: result,
		};

		// console.log(minutes);

		// console.log(convertMinsToTime(minutes));

		// const hours = Math.floor(minutes / 60);
		// console.log(hours);
		// console.log(`${hours} + ${minutes}`);

		addCounter(newInput);
		addNewWalkItem(newInput);
		setResult(enteredDuration);

		// if (resultMinutes > 59 && resultHours >= 0) {
		// 	setResultHours(resultHours + 1);
		// 	setResultMinutes(0);
		// } else {
		// 	setResultHours(resultHours + addHours);
		// 	setResultMinutes(resultMinutes + addMinutes);
		// }
		// addCounter(newInput);

		// function convert(enteredDuration) {
		// 	let sec_num = parseInt(enteredDuration, 10); // don't forget the second param
		// 	let hours = Math.floor(sec_num / 3600);
		// 	let minutes = Math.floor((sec_num - hours * 3600) / 60);
		// 	let seconds = sec_num - hours * 3600 - minutes * 60;

		// 	if (hours < 10) {
		// 		hours = '0' + hours;
		// 	}
		// 	if (minutes < 10) {
		// 		minutes = '0' + minutes;
		// 	}
		// 	if (seconds < 10) {
		// 		seconds = '0' + seconds;
		// 	}
		// 	return hours + ':' + minutes + ':' + seconds;
		// }

		// console.log(convert(enteredDuration));
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
					</section>
					<InputWalkButton type="submit">add</InputWalkButton>
				</InputWalkForm>
			</InputWalkContainer>
		</>
	);
}
