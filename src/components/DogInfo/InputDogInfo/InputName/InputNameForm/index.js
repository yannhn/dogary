import {nanoid} from 'nanoid';
import {useState} from 'react';

import {
	InputInfoContainer,
	InfoForm,
	ButtonGroup,
	CancelButton,
	AddButton,
	InputNameText,
} from './styled';

export default function InputInfoForm({passInfo, cancelForm}) {
	const [enteredName, setEnteredName] = useState('');

	const nameChangeHandler = event => {
		setEnteredName(event.target.value.replace(/^a-z/gi, ''));
	};

	const submitHandler = event => {
		event.preventDefault();
		const newItems = {
			id: nanoid(),
			enteredName:
				enteredName.trim().charAt(0).toUpperCase() + enteredName.slice(1).toLowerCase(),
		};
		passInfo(newItems);
		setEnteredName('');
	};

	return (
		<InputInfoContainer>
			<InfoForm onSubmit={submitHandler}>
				<section>
					<h2>Enter your dogs name!</h2>
					<label htmlFor="input-name" />
					<InputNameText
						id="input-name"
						type="text"
						placeholder="input here"
						value={enteredName}
						onChange={nameChangeHandler}
					></InputNameText>
				</section>
				<ButtonGroup>
					<CancelButton type="button" onClick={cancelForm}>
						Cancel
					</CancelButton>
					<AddButton type="submit">Add name</AddButton>
				</ButtonGroup>
			</InfoForm>
		</InputInfoContainer>
	);
}
