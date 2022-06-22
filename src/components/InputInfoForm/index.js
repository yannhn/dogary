export default function InputInfoForm() {
	return (
		<section>
			<form>
				<section>
					<label>
						Input Name:
						<input type="text"></input>
					</label>
				</section>
				<section>
					<label>
						Upload profile picture:
						<input type="file"></input>
					</label>
				</section>
				<button>Add</button>
			</form>
		</section>
	);
}
