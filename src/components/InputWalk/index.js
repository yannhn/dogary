import {useState} from 'react';

import {InputWalkContainer} from './styled';

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

		const splitTotal = enteredDuration.split(':').map(Number);
		console.log(splitTotal);

		const numTotal = parseFloat(splitTotal);
		console.log(numTotal);

		function addHours(a) {
			return a + a;
		}
		console.log(addHours(splitTotal[0]));

		function addMinuted(a) {
			return a + a;
		}
		console.log(addMinuted(splitTotal[1]));

		// function decimalHoursToString(hoursDecimal) {
		// 	const numHours = Math.floor(hoursDecimal);
		// 	const numMinutes = Math.round((hoursDecimal - numHours) * 60);
		// 	return `${numHours < 10 ? '0' : ''}${numHours}:${
		// 		numMinutes < 10 ? '0' : ''
		// 	}${numMinutes}`;
		// }

		// const splitMap = splitTotal.map(item => {
		// 	return parseInt(item);
		// });
		// console.log(splitMap);

		// const total = splitMap.reduce((previous, current) => previous + current, 0);
		// console.log(total);

		// const test = splitMap[0];
		// console.log(test);

		// function testSum(test) {
		// 	return test + test;
		// }
		// console.log(testSum(test));

		// const test2 = splitMap[1];
		// console.log(test2);

		// function testSum2(test) {
		// 	return test + test;
		// }
		// console.log(testSum2(test2));

		// const totalFirst = splitMap.reduce((previous, current) => previous + current, 0);
		// console.log(totalFirst);
		// const length = splitTotal.length;
		// console.log(length);
		// const splitNum = parseInt(splitTotal);
		// console.log(splitNum);
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
