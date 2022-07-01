import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputBusinessContainer} from './styled';

export default function InputBusiness({addItems}) {
	const [smallBusiness, setSmallBusiness] = useState(false);
	const [bigBusiness, setBigBusiness] = useState(false);
	const [time, setTime] = useState('');

	const resetForm = () => {
		setSmallBusiness(false);
		setBigBusiness(false);
		setTime('');
	};

	const submitHandler = e => {
		e.preventDefault();
		const event = {
			id: nanoid(),
			smallBusiness: smallBusiness,
			bigBusiness: bigBusiness,
			time: time,
		};
		console.log(event);
		addItems(event);
		resetForm();
	};

	return (
		<>
			<InputBusinessContainer>
				<form onSubmit={submitHandler}>
					<h4>Your dogs business</h4>
					<section>
						<h5>Type of business</h5>
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
						<h5>Time of business</h5>
						<label>
							<input
								type="time"
								defaultValue="08:00"
								onChange={event => setTime(event.target.value)}
							></input>
						</label>
					</section>
					<button type="submit">add</button>
					<p>
						small - {String(smallBusiness)}, big - {String(bigBusiness)}, date - {time}
					</p>
					<p onClick={resetForm}>reset form</p>
				</form>
			</InputBusinessContainer>
		</>
	);
}
