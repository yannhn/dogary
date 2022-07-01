import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputBusinessContainer, InputBusinessForm} from './styled';

export default function InputBusiness({addItems}) {
	const [smallBusiness, setSmallBusiness] = useState(false);
	const [bigBusiness, setBigBusiness] = useState(false);
	const [time, setTime] = useState('08:00');

	const resetHandler = () => {
		setSmallBusiness(false);
		setBigBusiness(false);
		setTime(time);
	};

	const submitHandler = event => {
		event.preventDefault();
		const newItem = {
			id: nanoid(),
			smallBusiness: smallBusiness,
			bigBusiness: bigBusiness,
			time: time,
		};
		addItems(newItem);
		resetHandler();
	};

	return (
		<>
			<InputBusinessContainer>
				<InputBusinessForm onSubmit={submitHandler}>
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
				</InputBusinessForm>
			</InputBusinessContainer>
		</>
	);
}
