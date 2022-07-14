import {useState} from 'react';

import FormModal from '../FormModal';
import InputInfoForm from '../InputInfoForm/index';
import ShowName from '../ShowName/index';

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
					<InputInfoForm addNewInfo={addNewInfo} cancelForm={cancelForm} />
				</FormModal>
			)}
			<section>
				<ShowName styledName={submittedItem.enteredName}></ShowName>
			</section>
		</>
	);
}
