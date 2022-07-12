import {ToDoItemContainer, ToDoItem} from './styled';

export default function ToDo({title, deleteToDo}) {
	return (
		<ToDoItemContainer>
			<ToDoItem htmlFor="checkbox">
				<input id="checkbox" type="checkbox"></input>
				{title}
			</ToDoItem>
			<button onClick={deleteToDo}>Delete</button>
		</ToDoItemContainer>
	);
}
