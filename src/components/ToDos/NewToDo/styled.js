import {nanoid} from 'nanoid';
import {useState} from 'react';

export default function ToDo() {
	const [todos, setTodos] = useState([
		{id: nanoid(), title: 'wash the dog', checked: false},
		{id: nanoid(), title: 'buy food', checked: false},
		{id: nanoid(), title: 'go to veterinarian', checked: false},
	]);
	return <section></section>;
}
