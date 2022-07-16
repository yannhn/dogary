import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputInfoContainer, InfoForm, InfoImgPreview, StyledPreviewContainer} from './styled';

export default function InputImageForm({passInfo, cancelForm}) {
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
		passInfo(newItems);
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
						required
						onChange={imageChangeHandler}
					></input>
				</section>
				<section>
					<h2>Image Preview</h2>
					<StyledPreviewContainer>
						<InfoImgPreview src={image} alt="preview" width="auto" height="auto" />
					</StyledPreviewContainer>
				</section>
				<button type="submit">Add</button>
				<button type="button" onClick={cancelForm}>
					cancel
				</button>
			</InfoForm>
		</InputInfoContainer>
	);
}
