import {useState} from 'react';

import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardSection from '../ToDoCardSection';
import ToDoCardTitle from '../ToDoCardTitle';

import {ToDoListContainer} from './styled';

export default function ToDoList() {
	const [toDos, setToDos] = useState([]);

	function addNewToDo(newTodo) {
		setToDos(prevToDo => {
			return [newTodo, ...prevToDo];
		});
	}

	function editTask(id, newTitle) {
		const editedToDos = toDos.map(toDo => {
			if (id === toDo.id) {
				return {...toDo, title: newTitle};
			}
			return toDo;
		});
		setToDos(editedToDos);
	}

	function completeToDo(id) {
		const completedToDos = toDos.map(toDo => {
			if (id === toDo.id) {
				return {...toDo, completed: !toDo.completed};
			}
			return toDo;
		});
		setToDos(completedToDos);
	}

	function deleteToDo(id) {
		const filteredToDos = toDos.filter(todo => id !== todo.id);
		setToDos(filteredToDos);
	}

	return (
		<ToDoListContainer>
			<ToDoCardTitle />
			<ToDoCardSection />
			{toDos.map(todo => (
				<ToDo
					key={todo.id}
					id={todo.id}
					title={todo.title}
					editTask={editTask}
					completeToDo={() => completeToDo(todo.id)}
					deleteToDo={() => deleteToDo(todo.id)}
				/>
			))}
			<NewToDoButton addNewToDo={addNewToDo} />
		</ToDoListContainer>
	);
}
