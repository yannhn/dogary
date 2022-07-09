import NewToDoForm from '../NewToDoForm';
import ToDo from '../ToDo';

export default function ToDoCard() {
	return (
		<>
			<ToDo />
			<button>Add</button>
			<NewToDoForm />
		</>
	);
}
