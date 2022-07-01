import {useState} from 'react';
import InputInfoForm from '../InputInfoForm/index';

export default function InputInfoButton() {
	const [showForm, setShowForm] = useState(false);

	const button = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<InputInfoForm />
		</>
	);
}
