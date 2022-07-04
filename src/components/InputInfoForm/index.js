import {nanoid} from 'nanoid';
import {useState} from 'react';

export default function InputInfoForm({addNewInfo, onSaveInfoData}) {
	const [enteredName, setEnteredName] = useState('');
	const [image, setImage] = useState([]);

	const imageChangeHandler = e => {
		console.log(e.target.files);
		setImage(URL.createObjectURL(e.target.files[0]));
	};

	const nameChangeHandler = event => {
		setEnteredName(event.target.value);
	};

	const submitHandler = event => {
		event.preventDefault();
		const newItems = {
			id: nanoid(),
			enteredName: enteredName,
			image: image,
		};
		addNewInfo(newItems);
		// onSaveInfoData(newItems);
		setEnteredName('');
	};

	return (
		<section>
			<form onSubmit={submitHandler}>
				<section>
					<h2>What is the name of your dog?</h2>
					<label>
						Input Name:
						<input type="text" value={enteredName} onChange={nameChangeHandler}></input>
					</label>
				</section>
				<section>
					<h2>Upload your image!</h2>
					<label>
						Upload profile picture:
						<input
							type="file"
							accept=".png, .jpg, .jpeg"
							onChange={imageChangeHandler}
						></input>
					</label>
					<section>
						<h2>Image Preview</h2>
						<img src={image} alt="preview" width="250" height="250" />
					</section>
				</section>
				<button type="submit">Add</button>
			</form>
		</section>
	);
}
