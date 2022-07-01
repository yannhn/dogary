import {useState} from 'react';

import InputInfoForm from '../InputInfoForm/index';

export default function InputInfoButton() {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>SHOW Form</button>
			{showForm && <InputInfoForm />}
		</>
	);
}
