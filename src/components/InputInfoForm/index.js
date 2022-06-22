import {useState} from 'react';

export default function InputInfoForm() {
	const [enteredName, setEnteredName] = useState('');

	const nameChangeHandler = event => {
		setEnteredName(event.target.value);
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
						<input type="file"></input>
					</label>
				</section>
				<button>Add</button>
			</form>
		</section>
	);
}
