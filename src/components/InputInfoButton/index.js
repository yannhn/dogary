import {useState} from 'react';

import InputInfoForm from '../InputInfoForm/index';
import ShowName from '../ShowName/index';
import ShowPicture from '../ShowPicture/index';

// TODO: Namenstyling verbessern, damit dieses nicht zu viel wird

export default function InputInfoButton() {
	const [showForm, setShowForm] = useState(false);
	// const [submittedName, setSubmittedName] = useState('');
	// const [submittedImg, setSubmittedImg] = useState(null);

	const [submittedItems, setSubmittedItems] = useState([]);

	function addNewInfo(prevItem) {
		const newInfoItems = [...submittedItems, prevItem];
		setSubmittedItems(newInfoItems);
	}

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Form</button>
			{showForm && (
				<InputInfoForm
					addNewInfo={addNewInfo}
					// setSubmittedName={setSubmittedName}
					// setSubmittedImg={setSubmittedImg}
				/>
			)}
			<ShowName submittedItems={submittedItems}></ShowName>
			<ShowPicture submittedItems={submittedItems}></ShowPicture>
		</>
	);
}
