import {useState} from 'react';

import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardTitle from '../ToDoCardTitle';
import ToDoFilterSection from '../ToDoFilterSection';

import {ToDoListContainer} from './styled';

export default function ToDoList() {
	const [toDos, setToDos] = useState([]);
	const [status, setStatus] = useState('all');

	const filteredToDo = filterChangeHandler();

	function filterChangeHandler() {
		switch (status) {
			case 'completed':
				return toDos.filter(todo => todo.completed === true);
			case 'uncompleted':
				return toDos.filter(todo => todo.completed === false);
			default:
				return toDos;
		}
	}

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
			<ToDoFilterSection onChangeStatus={newStatus => setStatus(newStatus)} />
			{filteredToDo.map(todo => (
				<ToDo
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
					editTask={editTask}
					completeToDo={() => completeToDo(todo.id)}
					deleteToDo={() => deleteToDo(todo.id)}
				/>
			))}
			<NewToDoButton addNewToDo={addNewToDo} />
		</ToDoListContainer>
	);
}
