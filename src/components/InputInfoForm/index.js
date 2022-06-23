import {useState} from 'react';

export default function InputInfoForm() {
	const [enteredName, setEnteredName] = useState('');
	// const [image, setImage] = useState(null);

	const nameChangeHandler = event => {
		setEnteredName(event.target.value);
	};

	const imageChangeHandler = event => {
		console.log(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		alert('submit!');
		setEnteredName('');
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<section>
					<label>
						Input Name:
						<input type="text" value={enteredName} onChange={nameChangeHandler}></input>
					</label>
				</section>
				<section>
					<label>
						Upload profile picture:
						<input type="file" onChange={imageChangeHandler}></input>
					</label>
				</section>
				<button>Add</button>
			</form>
		</section>
	);
}
