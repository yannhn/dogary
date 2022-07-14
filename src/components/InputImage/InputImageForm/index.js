import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputInfoContainer, InfoForm, InfoImgPreview} from './styled';

export default function InputImageForm({addNewInfo, cancelForm}) {
	const [image, setImage] = useState('');

	const imageChangeHandler = event => {
		setImage(URL.createObjectURL(event.target.files[0]));
	};

	const submitHandler = event => {
		event.preventDefault();
		const newItems = {
			id: nanoid(),
			image: image,
		};
		addNewInfo(newItems);
		setImage([]);
	};

	return (
		<InputInfoContainer>
			<InfoForm onSubmit={submitHandler}>
				<section>
					<h2>Upload your image!</h2>
					<label htmlFor="img-input">Upload profile picture: </label>
					<input
						id="img-input"
						type="file"
						accept=".png, .jpg, .jpeg"
						onChange={imageChangeHandler}
					></input>
				</section>
				<section>
					<h2>Image Preview</h2>
					<InfoImgPreview src={image} alt="preview" width="250" height="250" />
				</section>
				<button type="submit">Add</button>
				<button type="button" onClick={cancelForm}>
					cancel
				</button>
			</InfoForm>
		</InputInfoContainer>
	);
}
