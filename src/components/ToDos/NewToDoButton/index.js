import {useState} from 'react';

import NewToDoForm from '../NewToDoForm';

import {OpenFormButtonContainer, OpenFormButton} from './styled';

export default function NewToDoButton() {
	const [showForm, setShowForm] = useState(false);

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
			{showForm && <NewToDoForm />}
		</>
	);
}

// {
// 	showForm && (
// 		<FormModal>
// 			<InputFood addNewFoodItem={addNewFoodItem} cancelForm={cancelForm}></InputFood>
// 		</FormModal>
// 	);
// }
