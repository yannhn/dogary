import {useState} from 'react';

import FormModal from '../../../../FormModal/index';
import ShowName from '../../../../ShowName/index';
import InputNameForm from '../InputNameForm/index';

export default function InputInfoButton() {
	const [showForm, setShowForm] = useState(false);
	const [submittedItem, setSubmittedItems] = useState({enteredName: ''});

	const addNewInfo = prevItem => {
		const newInfoItems = {...submittedItem, ...prevItem};
		setShowForm(false);
		setSubmittedItems(newInfoItems);
	};

	function cancelForm() {
		setShowForm(!showForm);
	}

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Form</button>
			{showForm && (
				<FormModal>
					<InputNameForm addNewInfo={addNewInfo} cancelForm={cancelForm} />
				</FormModal>
			)}
			<section>
				<ShowName styledName={submittedItem.enteredName}></ShowName>
			</section>
		</>
	);
}
