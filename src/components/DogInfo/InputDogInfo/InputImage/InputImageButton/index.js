import {useState} from 'react';

import FormModal from '../../../../FormModal/index.js';
import ShowPicture from '../../../../ShowPicture/index';
import InputImageForm from '../InputImageForm';

export default function InputImageButton() {
	const [showForm, setShowForm] = useState(false);
	const [submittedItem, setSubmittedItems] = useState({image: ''});

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
					<InputImageForm addNewInfo={addNewInfo} cancelForm={cancelForm} />
				</FormModal>
			)}
			<section>
				<ShowPicture styledImage={submittedItem.image}></ShowPicture>
			</section>
		</>
	);
}
