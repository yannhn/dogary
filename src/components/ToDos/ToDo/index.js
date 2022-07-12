import {ToDoItemContainer} from './styled';

export default function ToDo({title, deleteToDo}) {
	return (
		<ToDoItemContainer>
			<input type="checkbox"></input>
			<p>{title}</p>
			<button onClick={deleteToDo}>Delete</button>
		</ToDoItemContainer>
	);
}
