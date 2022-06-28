export default function InputWalk() {
	return (
		<>
			<section>
				<form>
					<section>
						<label>
							How long?
							<input type="number"></input>
						</label>
						<p>OR</p>
						<label>
							TimeFrame
							<input type="time"></input>
						</label>
					</section>
					<label>
						time of day
						<input type="time"></input>
					</label>
					<button type="submit">add</button>
				</form>
			</section>
		</>
	);
}
