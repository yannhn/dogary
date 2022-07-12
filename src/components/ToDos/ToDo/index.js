import {useState} from 'react';

import {ToDoItemContainer, ToDoItem} from './styled';

export default function ToDo({id, title, editTask, deleteToDo}) {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		editTask(id, newTitle);
		setNewTitle('');
		setIsEditing(false);
	}

	return (
		<>
			{isEditing ? (
				<ToDoItemContainer>
					<form onSubmit={handleSubmit}>
						<input type="checkbox"></input>
						<input
							type="text"
							value={newTitle}
							onChange={event => setNewTitle(event.target.value)}
						/>
						<section>
							<button type="button" onClick={() => setIsEditing(false)}>
								Cancel editing {title}
							</button>
							<button type="submit">Save new title for {title}</button>
						</section>
					</form>
				</ToDoItemContainer>
			) : (
				<ToDoItemContainer>
					<ToDoItem htmlFor="checkbox">
						<input id="checkbox" type="checkbox"></input>
						{title}
					</ToDoItem>
					<button onClick={() => setIsEditing(true)}>Edit</button>
					<button onClick={deleteToDo}>Delete</button>
				</ToDoItemContainer>
			)}
		</>
	);
}
