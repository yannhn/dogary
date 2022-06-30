import {InputBusinessContainer} from './styled';

export default function InputBusiness({}) {
	return (
		<>
			<InputBusinessContainer>
				<form>
					<h4>Your dogs business</h4>
					<section>
						<h5>Type of business</h5>
						<label>
							small
							<input type="radio"></input>
						</label>
						<label>
							big
							<input type="radio"></input>
						</label>
					</section>
					<section>
						<h5>Time of business</h5>
						<label>
							<input type="time" defaultValue="08:00"></input>
						</label>
					</section>
					<button type="submit">add</button>
				</form>
			</InputBusinessContainer>
		</>
	);
}
