import {useState} from 'react';

import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardSection from '../ToDoCardSection';
import ToDoCardTitle from '../ToDoCardTitle';

import {ToDoCardContainer} from './styled';

export default function ToDoCard() {
	const [items, setItems] = useState([]);

	function addNewToDos(items) {
		setItems(prevItem => {
			return [items, ...prevItem];
		});
	}

	return (
		<ToDoCardContainer>
			<ToDoCardTitle />
			<ToDoCardSection />
			{items.map(item => (
				<ToDo key={item.id} title={item.title} />
			))}
			<NewToDoButton addNewToDos={addNewToDos} />
		</ToDoCardContainer>
	);
}
