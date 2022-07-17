import {useState} from 'react';

import NewToDoForm from '../NewToDoForm';
import ToDo from '../ToDo';
import ToDoFilterSection from '../ToDoFilterSection';

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
			case 'urgent':
				return toDos.filter(todo => todo.urgent === true && !todo.completed);
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

	function urgentToDo(id) {
		const urgentToDos = toDos.map(toDo => {
			if (id === toDo.id) {
				return {...toDo, urgent: !toDo.urgent};
			}
			return toDo;
		});
		setToDos(urgentToDos);
	}

	function deleteToDo(id) {
		const filteredToDos = toDos.filter(todo => id !== todo.id);
		setToDos(filteredToDos);
	}

	return (
		<section>
			<ToDoFilterSection onChangeStatus={newStatus => setStatus(newStatus)} />
			<NewToDoForm addNewToDo={addNewToDo} />
			{filteredToDo.map(todo => (
				<ToDo
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
					urgent={todo.urgent}
					editTask={editTask}
					completeToDo={() => completeToDo(todo.id)}
					deleteToDo={() => deleteToDo(todo.id)}
					urgentToDo={() => urgentToDo(todo.id)}
				/>
			))}
		</section>
	);
}
