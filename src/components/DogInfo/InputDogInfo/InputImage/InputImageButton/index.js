import {useState} from 'react';

import FormModal from '../../../../FormModal/index.js';
import InputImageForm from '../InputImageForm';

export default function InputImageButton({addNewInfo}) {
	const [showForm, setShowForm] = useState(false);

	const passInfo = prevItem => {
		const newInfoItems = {...prevItem};
		setShowForm(false);
		addNewInfo(newInfoItems);
	};

	const showFormHandler = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<button onClick={showFormHandler}>Change Image</button>
			{showForm && (
				<FormModal>
					<InputImageForm passInfo={passInfo} cancelForm={showFormHandler} />
				</FormModal>
			)}
		</>
	);
}
