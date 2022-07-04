import {useState} from 'react';

import InputInfoForm from '../InputInfoForm/index';
import ShowName from '../ShowName/index';
import ShowPicture from '../ShowPicture/index';

export default function InputInfoButton() {
	const [showForm, setShowForm] = useState(false);

	const [submittedItems, setSubmittedItems] = useState([]);

	function addNewInfo(prevItem) {
		const newInfoItems = [...submittedItems, prevItem];
		setSubmittedItems(newInfoItems);
		console.log(newInfoItems);
	}

	return (
		<>
			<button onClick={() => setShowForm(!showForm)}>Show Form</button>
			{showForm && <InputInfoForm addNewInfo={addNewInfo} />}

			{submittedItems.map((item, index, array) =>
				index === array.length - 1 ? (
					<section key={item.id}>
						<ShowName styledName={item.enteredName}></ShowName>
						<ShowPicture styledImage={item.image}></ShowPicture>
					</section>
				) : (
					console.log('Worked!')
				)
			)}
			<hr></hr>
		</>
	);
}
