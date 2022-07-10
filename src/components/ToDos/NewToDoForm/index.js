import {nanoid} from 'nanoid';
import {useState} from 'react';

export default function NewToDoForm({saveToDoDataHandler}) {
	const [enteredTitle, setEnteredTitle] = useState('');

	const submitHandler = event => {
		event.preventDefault();
		const newToDo = {
			id: nanoid(),
			title: enteredTitle,
		};
		saveToDoDataHandler(newToDo);
	};

	return (
		<section>
			<form onSubmit={submitHandler}>
				<label htmlFor="todo-text">Input your todo</label>
				<input
					id="todo-text"
					type="text"
					onChange={event => setEnteredTitle(event.target.value)}
				/>
				<button>Add ToDo</button>
			</form>
		</section>
	);
}
