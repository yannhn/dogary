import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputInfoContainer, InfoForm, InfoImgPreview} from './styled';

export default function InputInfoForm({addNewInfo, showForm, setShowForm}) {
	const [enteredName, setEnteredName] = useState('');
	const [image, setImage] = useState('');

	const imageChangeHandler = event => {
		setImage(URL.createObjectURL(event.target.files[0]));
	};

	const nameChangeHandler = event => {
		setEnteredName(event.target.value.replace(/^a-z/gi, ''));
	};

	const submitHandler = event => {
		event.preventDefault();
		const newItems = {
			id: nanoid(),
			enteredName:
				enteredName.trim().charAt(0).toUpperCase() + enteredName.slice(1).toLowerCase(),
			image: image,
		};
		addNewInfo(newItems);
		setEnteredName('');
		setImage([]);
	};

	return (
		<InputInfoContainer>
			<InfoForm onSubmit={submitHandler}>
				<section>
					<h2>What is the name of your dog?</h2>
					<label>
						Input Name:
						<input
							type="text"
							placeholder="Name"
							value={enteredName}
							onChange={nameChangeHandler}
						></input>
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
						<InfoImgPreview src={image} alt="preview" width="250" height="250" />
					</section>
				</section>
				<button type="submit">Add</button>
				<button type="button" onClick={() => setShowForm(!showForm)}>
					cancel
				</button>
			</InfoForm>
		</InputInfoContainer>
	);
}
