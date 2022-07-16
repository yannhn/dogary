import {nanoid} from 'nanoid';
import {useState} from 'react';

import {
	InputInfoContainer,
	InfoForm,
	InfoImgPreview,
	StyledPreviewContainer,
	ButtonGroup,
	CancelButton,
	AddButton,
} from './styled';

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
					<h2>Upload your cutest picture!</h2>
					<label htmlFor="img-input">(Preferably of your dog.)</label>
					<input
						id="img-input"
						type="file"
						accept=".png, .jpg, .jpeg"
						required
						onChange={imageChangeHandler}
					></input>
				</section>
				<section>
					<h2>Picture Preview</h2>
					<StyledPreviewContainer>
						<InfoImgPreview
							src={image ? image : 'https://placedog.net/800/640?id=12'}
							alt="preview"
							width="auto"
							height="auto"
						/>
					</StyledPreviewContainer>
				</section>
				<ButtonGroup>
					<CancelButton type="CancelButton" onClick={cancelForm}>
						Cancel
					</CancelButton>
					<AddButton type="submit">Add Picture</AddButton>
				</ButtonGroup>
			</InfoForm>
		</InputInfoContainer>
	);
}
