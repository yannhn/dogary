import {useState} from 'react';

export default function InputInfoForm() {
	const [enteredName, setEnteredName] = useState('');
	const [image, setImage] = useState(null);

	const nameChangeHandler = event => {
		setEnteredName(event.target.value);
	};

	function handleChange(e) {
		console.log(e.target.files);
		setImage(URL.createObjectURL(e.target.files[0]));
	}

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
						<input
							type="text"
							accept=".png, .jpg, .jpeg"
							value={enteredName}
							onChange={nameChangeHandler}
						></input>
					</label>
				</section>
				<section>
					<h2>Upload your image!</h2>
					<label>
						Upload profile picture:
						<input type="file" onChange={handleChange}></input>
					</label>
					<section>
						<h2>Image Preview</h2>
						<img src={image} alt="preview" />
					</section>
				</section>
				<button>Add</button>
			</form>
		</section>
	);
}
