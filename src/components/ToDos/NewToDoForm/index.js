import {nanoid} from 'nanoid';
import {useState} from 'react';

import {NewToDoFormContainer, NewToDoFormLabel} from './styled';

export default function NewToDoForm({saveToDoDataHandler, cancelForm}) {
	const [enteredTitle, setEnteredTitle] = useState('');

	const submitHandler = event => {
		event.preventDefault();
		const newToDo = {
			id: nanoid(),
			title:
				enteredTitle.trim().charAt(0).toUpperCase() + enteredTitle.slice(1).toLowerCase(),
			completed: false,
		};
		saveToDoDataHandler(newToDo);
		setEnteredTitle('');
	};

	return (
		<section>
			<NewToDoFormContainer onSubmit={submitHandler}>
				<NewToDoFormLabel htmlFor="todo-text">Input your next Todo:</NewToDoFormLabel>
				<input
					id="todo-text"
					type="text"
					value={enteredTitle}
					required
					onChange={event => setEnteredTitle(event.target.value)}
				/>
				<button>Add ToDo</button>
				<button type="button" onClick={cancelForm}>
					Close
				</button>
			</NewToDoFormContainer>
		</section>
	);
}
