import {Icon} from '@iconify/react';
import {useState} from 'react';

import FormModal from '../../../../FormModal/index.js';
import InputImageForm from '../InputImageForm';

import {ImageButton} from './styled';

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
			<ImageButton onClick={showFormHandler}>
				<Icon
					icon="mdi:image-area"
					width="2rem"
					height="2rem"
					color="#323232"
					alt="input image"
				/>
			</ImageButton>
			{showForm && (
				<FormModal>
					<InputImageForm passInfo={passInfo} cancelForm={showFormHandler} />
				</FormModal>
			)}
		</>
	);
}
