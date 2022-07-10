import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputBusinessContainer, InputBusinessForm} from './styled';

export default function InputBusiness({addNewBusinessItem, cancelForm}) {
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
		const newBusinessItem = {
			id: nanoid(),
			smallBusiness: smallBusiness,
			bigBusiness: bigBusiness,
			time: time,
		};
		addNewBusinessItem(newBusinessItem);
		resetHandler();
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
								onChange={event => setTime(event.target.value)}
							></input>
						</label>
					</section>
					<button type="submit">add</button>
					<button type="button" onClick={cancelForm}>
						cancel
					</button>
				</InputBusinessForm>
			</InputBusinessContainer>
		</>
	);
}
