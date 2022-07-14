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

	function cancelForm() {
		setShowForm(!showForm);
	}

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Change Name</button>
			{showForm && (
				<FormModal>
					<InputNameForm passInfo={passInfo} cancelForm={cancelForm} />
				</FormModal>
			)}
		</>
	);
}
