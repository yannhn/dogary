import {useState} from 'react';

import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardSection from '../ToDoCardSection';
import ToDoCardTitle from '../ToDoCardTitle';

import {ToDoListContainer} from './styled';

export default function ToDoList() {
	const [items, setItems] = useState([]);
	const [todoEditing, setTodoEditing] = useState(null);
	const [editingText, setEditingText] = useState('');

	function addNewToDo(newTodo) {
		setItems(prevItem => {
			return [newTodo, ...prevItem];
		});
	}

	function editToDo() {
		const updatedToDos = [...items].map(item => {
			if (key === id) {
				item.title = editingText;
			}
			return item;
		});
		setItems(updatedToDos);
		setTodoEditing(null);
		setEditingText('');
	}

	return (
		<ToDoListContainer>
			<ToDoCardTitle />
			<ToDoCardSection />
			{items.map(item => (
				<ToDo
					key={item.id}
					title={item.title}
					setEditingText={() => setEditingText(item.id)}
					setTodoEditing={() => setTodoEditing(item.id)}
					editTodo={() => editToDo(item.id)}
					todoEditing={todoEditing}
					editingText={editingText}
				/>
			))}
			<NewToDoButton addNewToDo={addNewToDo} />
		</ToDoListContainer>
	);
}
