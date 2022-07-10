import {ToDoItemContainer} from './styled';

export default function ToDo({title}) {
	return (
		<section>
			<ToDoItemContainer>
				<input type="checkbox"></input>
				<p>{title}</p>
			</ToDoItemContainer>
		</section>
	);
}
