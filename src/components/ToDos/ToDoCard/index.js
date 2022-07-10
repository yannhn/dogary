import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardHeading from '../ToDoCardHeading';

import {ToDoCardContainer} from './styled';

export default function ToDoCard() {
	return (
		<ToDoCardContainer>
			<ToDoCardHeading />
			<ToDo />
			<NewToDoButton />
		</ToDoCardContainer>
	);
}
