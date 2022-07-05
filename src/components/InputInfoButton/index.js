import {useState} from 'react';

import InputInfoForm from '../InputInfoForm/index';
import ShowName from '../ShowName/index';
import ShowPicture from '../ShowPicture/index';

export default function InputInfoButton() {
	const [showForm, setShowForm] = useState(false);
	const [submittedItem, setSubmittedItems] = useState({enteredName: '', image: ''});

	const addNewInfo = prevItem => {
		const newInfoItems = {...submittedItem, ...prevItem};
		setSubmittedItems(newInfoItems);
	};

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Form</button>
			{showForm && <InputInfoForm addNewInfo={addNewInfo} />}
			<section>
				<ShowName styledName={submittedItem.enteredName}></ShowName>
				<ShowPicture styledImage={submittedItem.image}></ShowPicture>
			</section>
		</>
	);
}
