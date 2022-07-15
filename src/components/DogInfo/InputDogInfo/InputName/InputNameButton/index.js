import {useState} from 'react';

import FormModal from '../../../../FormModal/index';
import InputNameForm from '../InputNameForm/index';

export default function InputNameButton({addNewInfo}) {
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
			<button onClick={showFormHandler}>Change Name</button>
			{showForm && (
				<FormModal>
					<InputNameForm passInfo={passInfo} cancelForm={showFormHandler} />
				</FormModal>
			)}
		</>
	);
}
