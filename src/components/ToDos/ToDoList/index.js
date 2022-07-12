import {useState} from 'react';

import NewToDoButton from '../NewToDoButton';
import ToDo from '../ToDo';
import ToDoCardTitle from '../ToDoCardTitle';
import ToDoFilterSection from '../ToDoFilterSection';

import {ToDoListContainer} from './styled';

export default function ToDoList() {
	const [toDos, setToDos] = useState([]);
	const [filter, setFilter] = useState('Open');

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

	// const filterList = FILTER_NAMES.map(name => (
	// 	<ToDoFilterSection
	// 		key={name}
	// 		name={name}
	// 		isPressed={name === filter}
	// 		setFilter={setFilter}
	// 	/>
	// ));

	// Setup buttons
	const FILTER_MAP = {
		Open: toDo => !toDo.completed,
		Log: toDo => toDo.completed,
	};

	// Get array instead of Object
	const FILTER_NAMES = Object.keys(FILTER_MAP);

	return (
		<ToDoListContainer>
			<ToDoCardTitle />
			{FILTER_NAMES.map(title => (
				<ToDoFilterSection
					key={title}
					title={title}
					isPressed={title === filter}
					setFilter={setFilter}
				/>
			))}
			{toDos.filter(FILTER_MAP[filter]).map(todo => (
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
