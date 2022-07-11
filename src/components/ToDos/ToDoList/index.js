import {useState} from 'react';

import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardSection from '../ToDoCardSection';
import ToDoCardTitle from '../ToDoCardTitle';

import {ToDoListContainer} from './styled';

export default function ToDoList() {
	const [items, setItems] = useState([]);

	function addNewToDo(newTodo) {
		setItems(prevItem => {
			return [newTodo, ...prevItem];
		});
	}

	return (
		<ToDoListContainer>
			<ToDoCardTitle />
			<ToDoCardSection />
			{items.map(item => (
				<ToDo key={item.id} title={item.title} />
			))}
			<NewToDoButton addNewToDo={addNewToDo} />
		</ToDoListContainer>
	);
}
