import ToDoCardTitle from '../ToDoCardTitle';
import ToDoList from '../ToDoList';

import {ToDoCardContainer} from './styled';

export default function ToDoCard() {
	return (
		<ToDoCardContainer>
			<ToDoCardTitle />
			<ToDoList />
		</ToDoCardContainer>
	);
}
