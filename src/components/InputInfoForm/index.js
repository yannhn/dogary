import {nanoid} from 'nanoid';
import {useState} from 'react';

import {InputInfoContainer, InfoForm, InfoImgPreview} from './styled';

export default function InputInfoForm({addNewInfo, cancelForm}) {
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
		addNewInfo(newItems);
		setEnteredName('');
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
				<button type="submit">Add</button>
				<button type="button" onClick={cancelForm}>
					cancel
				</button>
			</InfoForm>
		</InputInfoContainer>
	);
}
