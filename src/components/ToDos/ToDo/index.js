import {useState} from 'react';

import {ToDoItemContainer} from './styled';

export default function ToDo({id, title, editTask}) {
	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		editTask(id, newName);
		setNewName('');
		setEditing(false);
	}

	const editingTemplate = (
		<form className="stack-small" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="todo-label">New name for {title}</label>
				<input
					className="todo-text"
					type="text"
					value={newName}
					onChange={event => setNewName(event.target.value)}
				/>
			</div>
			<div>
				<button type="button" onClick={() => setEditing(false)}>
					Cancel
					<span> renaming {title}</span>
				</button>
				<button type="submit">
					Save
					<span> new name for {title}</span>
				</button>
			</div>
		</form>
	);
	// const viewTemplate = (
	// 	<div className="stack-small">
	// 		<div className="c-cb">
	// 			<input type="checkbox" />
	// 			<label className="todo-label">{title}</label>
	// 		</div>
	// 		<div className="btn-group">
	// 			<button type="button" className="btn" onClick={() => setEditing(true)}>
	// 				Edit <span className="visually-hidden">{title}</span>
	// 			</button>
	// 		</div>
	// 	</div>
	// );

	return (
		<>
			{isEditing ? (
				editingTemplate
			) : (
				<ToDoItemContainer>
					<input type="checkbox"></input>
					<p>{title}</p>
					<button onClick={() => setEditing(true)}>Edit</button>
				</ToDoItemContainer>
			)}
		</>
	);
}
