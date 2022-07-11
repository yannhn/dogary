import {ToDoItemContainer} from './styled';

export default function ToDo({title}) {
	return (
		<ToDoItemContainer>
			<input type="checkbox"></input>
			<p>{title}</p>
		</ToDoItemContainer>
	);
}
