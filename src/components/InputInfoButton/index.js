import {useState} from 'react';

import InputInfoForm from '../InputInfoForm/index';
import ShowName from '../ShowName/index';

export default function InputInfoButton() {
	const [showForm, setShowForm] = useState(false);
	const [submittedName, setSubmittedName] = useState('');

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Form</button>
			{showForm && <InputInfoForm setSubmittedName={setSubmittedName} />}

			<ShowName submittedName={submittedName}></ShowName>
		</>
	);
}
