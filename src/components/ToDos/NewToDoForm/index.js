import {nanoid} from 'nanoid';
import {useState} from 'react';

import {NewToDoFormContainer, NewToDoInput, NewToDoButton} from './styled';

export default function NewToDoForm({addNewToDo}) {
	const [enteredTitle, setEnteredTitle] = useState('');

	const submitHandler = event => {
		event.preventDefault();
		const newToDo = {
			id: nanoid(),
			title:
				enteredTitle.trim().charAt(0).toUpperCase() + enteredTitle.slice(1).toLowerCase(),
			completed: false,
			urgent: false,
		};
		addNewToDo(newToDo);
		setEnteredTitle('');
	};

	return (
		<section>
			<NewToDoFormContainer onSubmit={submitHandler}>
				<section>
					<label htmlFor="todo-text"></label>
					<NewToDoInput
						id="todo-text"
						type="text"
						value={enteredTitle}
						placeholder="Your next todo..."
						required
						numberOfLines={4}
						multiline
						onChange={event => setEnteredTitle(event.target.value)}
					/>
				</section>
				<NewToDoButton type="submit">+</NewToDoButton>
			</NewToDoFormContainer>
		</section>
	);
}
