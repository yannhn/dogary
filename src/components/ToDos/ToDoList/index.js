import {useState, useEffect} from 'react';

import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardTitle from '../ToDoCardTitle';
import ToDoFilterSection from '../ToDoFilterSection';

import {ToDoListContainer} from './styled';

export default function ToDoList() {
	const [toDos, setToDos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredToDo, setFilteredToDo] = useState([]);

	useEffect(() => {
		filterChangeHandler();
	}, [toDos, status]);

	function filterChangeHandler() {
		switch (status) {
			case 'completed':
				setFilteredToDo(toDos.filter(todo => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredToDo(toDos.filter(todo => todo.completed === false));
				break;
			default:
				setFilteredToDo(toDos);
				break;
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
			<ToDoFilterSection onChangeFilter={filterChangeHandler} setStatus={setStatus} />
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
