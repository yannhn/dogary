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

	function deleteToDo(id) {
		const filteredItems = items.filter(item => id !== item.id);
		setItems(filteredItems);
	}

	return (
		<ToDoListContainer>
			<ToDoCardTitle />
			<ToDoCardSection />
			{items.map(item => (
				<ToDo key={item.id} title={item.title} deleteToDo={deleteToDo} />
			))}
			<NewToDoButton addNewToDo={addNewToDo} />
		</ToDoListContainer>
	);
}
