import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputBusinessContainer, InputBusinessForm} from './styled';

export default function InputBusiness({addNewBusinessItem, cancelForm}) {
	const [smallBusiness, setSmallBusiness] = useState(false);
	const [bigBusiness, setBigBusiness] = useState(false);
	const [time, setTime] = useState('08:00');
	const [enteredDate, setEnteredDate] = useState('');
	const [message, setMessage] = useState('');

	const submitHandler = event => {
		event.preventDefault();
		const newBusinessItem = {
			id: nanoid(),
			smallBusiness: smallBusiness,
			bigBusiness: bigBusiness,
			time: time,
			date: new Date(enteredDate).toDateString(),
		};
		addNewBusinessItem(newBusinessItem);
		setSmallBusiness(false);
		setBigBusiness(false);
		setTime(time);
		setMessage(
			`Your dog did ${newBusinessItem.smallBusiness} and/or ${newBusinessItem.bigBusiness} at ${newBusinessItem.time} o'clock on ${newBusinessItem.date}! Your dog will forever be grateful!`
		);
	};

	return (
		<>
			<InputBusinessContainer>
				<InputBusinessForm onSubmit={submitHandler}>
					<h2>Your dogs business</h2>
					<section>
						<h3>Type of business</h3>
						<label>
							small
							<input
								type="checkbox"
								checked={smallBusiness}
								onChange={() => setSmallBusiness(!smallBusiness)}
							></input>
						</label>
						<label>
							big
							<input
								type="checkbox"
								checked={bigBusiness}
								onChange={() => setBigBusiness(!bigBusiness)}
							></input>
						</label>
					</section>
					<section>
						<h3>Time of business</h3>
						<label>
							<input
								type="time"
								defaultValue="08:00"
								required
								onChange={event => setTime(event.target.value)}
							></input>
						</label>
						<h3>Date of business</h3>
						<label htmlFor="date">Date of Business</label>
						<input
							id="date"
							type="date"
							min="2022-07-01"
							max="2022-12-31"
							required
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</section>
					<button type="submit">add</button>
					<button type="button" onClick={cancelForm}>
						cancel
					</button>
				</InputBusinessForm>
				<h4>Last submit</h4>
				<p>{message}</p>
			</InputBusinessContainer>
		</>
	);
}
