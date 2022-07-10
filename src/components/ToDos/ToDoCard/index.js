import NewToDoButton from '../NewToDoButton';
import NewToDoForm from '../NewToDoForm';
import ToDo from '../ToDo';

export default function ToDoCard() {
	return (
		<>
			<ToDo />
			<NewToDoButton />
			<NewToDoForm />
		</>
	);
}
