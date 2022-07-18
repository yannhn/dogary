import {Icon} from '@iconify/react';
import {useState} from 'react';

import FormModal from '../../../../FormModal/index';
import InputNameForm from '../InputNameForm/index';

import {NameButton} from './styled';

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
			<NameButton onClick={showFormHandler}>
				<Icon
					icon="mdi:dots-horizontal"
					width="2rem"
					height="2rem"
					color="#323232"
					alt="input name"
				/>
			</NameButton>
			{showForm && (
				<FormModal>
					<InputNameForm passInfo={passInfo} cancelForm={showFormHandler} />
				</FormModal>
			)}
		</>
	);
}
