import {useState} from 'react';

import FormModal from '../../FormModal';
import NewToDoForm from '../NewToDoForm';

import {OpenFormButtonContainer, OpenFormButton} from './styled';

export default function NewToDoButton({addNewToDo}) {
	const [showForm, setShowForm] = useState(false);

	const saveToDoDataHandler = enteredTodo => {
		const newTodo = {
			...enteredTodo,
		};
		addNewToDo(newTodo);
	};

	function cancelForm() {
		setShowForm(!showForm);
	}

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
			{showForm && (
				<FormModal>
					<NewToDoForm
						saveToDoDataHandler={saveToDoDataHandler}
						cancelForm={cancelForm}
					/>
				</FormModal>
			)}
		</>
	);
}
