import {useState} from 'react';

import {ToDoItemContainer} from './styled';

export default function ToDo({
	key,
	title,
	setEditingText,
	setTodoEditing,
	editTodo,
	editingText,
	todoEditing,
}) {
	return (
		<ToDoItemContainer>
			<input type="checkbox"></input>
			{todoEditing === key ? (
				<input
					type="text"
					onChange={event => setEditingText(event.target.value)}
					value={editingText}
				/>
			) : (
				<p>{title}</p>
			)}

			<button onClick={setTodoEditing}>Edit ToDo</button>
			<button onClick={editTodo}>Submit Edit</button>
		</ToDoItemContainer>
	);
}
