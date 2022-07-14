import {useState} from 'react';

import FormModal from '../FormModal';
import InputImageForm from '../InputImageForm';
import ShowPicture from '../ShowPicture/index';

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
