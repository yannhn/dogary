import NewToDoButton from '../NewToDoButton';
import NewToDoForm from '../NewToDoForm';
import ToDo from '../ToDo';

import {ToDoCardContainer} from './styled';

export default function ToDoCard() {
	return (
		<ToDoCardContainer>
			<ToDo />
			<NewToDoButton />
			<NewToDoForm />
		</ToDoCardContainer>
	);
}
