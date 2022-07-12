import {useState} from 'react';

import {ToDoItemContainer, ToDoItem} from './styled';

export default function ToDo({id, title, editTask, completeToDo, deleteToDo, completed}) {
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
						<label htmlFor="checkbox" />
						<input id="checkbox" type="checkbox"></input>
						<label htmlFor="new-text-input" />
						<input
							id="new-text-input"
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
					{completed ? (
						<ToDoItem>{title}</ToDoItem>
					) : (
						<ToDoItem htmlFor="checkbox">
							<input id="checkbox" type="checkbox" onChange={completeToDo}></input>
							{title}
						</ToDoItem>
					)}
					{completed ? (
						<button onClick={deleteToDo}>Delete</button>
					) : (
						<section>
							<button onClick={() => setIsEditing(true)}>Edit</button>
							<button onClick={deleteToDo}>Delete</button>
						</section>
					)}
				</ToDoItemContainer>
			)}
		</>
	);
}
