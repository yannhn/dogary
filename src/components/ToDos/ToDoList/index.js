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

	function editTask(id, newTitle) {
		const editedTaskList = items.map(item => {
			// if this item has the same ID as the edited item
			if (id === item.id) {
				//
				return {...item, title: newTitle};
			}
			return item;
		});
		setItems(editedTaskList);
	}

	return (
		<ToDoListContainer>
			<ToDoCardTitle />
			<ToDoCardSection />
			{items.map(item => (
				<ToDo key={item.id} id={item.id} title={item.title} editTask={editTask} />
			))}
			<NewToDoButton addNewToDo={addNewToDo} />
		</ToDoListContainer>
	);
}
