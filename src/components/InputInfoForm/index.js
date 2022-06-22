export default function InputInfoForm() {
	const handleSubmit = event => {
		event.preventDefault();
		alert('submit!');
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
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
