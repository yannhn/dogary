import {nanoid} from 'nanoid';
import {useState} from 'react';

import NewToDoForm from '../NewToDoForm';

import {OpenFormButtonContainer, OpenFormButton} from './styled';

export default function NewToDoButton({addNewToDos}) {
	const [showForm, setShowForm] = useState(false);

	const saveToDoDataHandler = enteredTodo => {
		const newTodo = {
			...enteredTodo,
			id: nanoid(),
		};
		addNewToDos(newTodo);
	};

	return (
		<>
			<OpenFormButtonContainer>
				<OpenFormButton
					onClick={() => {
						setShowForm(!showForm);
					}}
				>
					{showForm ? '-' : '+'}
				</OpenFormButton>
			</OpenFormButtonContainer>
			{showForm && <NewToDoForm saveToDoDataHandler={saveToDoDataHandler} />}
		</>
	);
}
