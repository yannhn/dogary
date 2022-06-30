import {useState} from 'react';

import {InputBusinessContainer} from './styled';

export default function InputBusiness({}) {
	const [smallBusiness, setSmallBusiness] = useState(false);
	const [bigBusiness, setBigBusiness] = useState(false);
	const [time, setTime] = useState('');

	const resetForm = () => {
		setSmallBusiness(false);
		setBigBusiness(false);
		setTime('');
	};

	// const handleChange = event => {
	// 	setSmallBusiness(event.target.value);
	// 	setBigBusiness(event.target.value);
	// };

	console.log(smallBusiness);

	return (
		<>
			<InputBusinessContainer>
				<form>
					<h4>Your dogs business</h4>
					<section>
						<h5>Type of business</h5>
						<label>
							small
							<input
								type="checkbox"
								value={smallBusiness}
								onChange={event => setSmallBusiness(event.target.value)}
							></input>
						</label>
						<label>
							big
							<input
								type="checkbox"
								value={bigBusiness}
								onChange={event => setBigBusiness(event.target.value)}
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
						small - {smallBusiness}, big - {bigBusiness}, date - {time}
					</p>
					<p onClick={resetForm}>reset form</p>
				</form>
			</InputBusinessContainer>
		</>
	);
}
