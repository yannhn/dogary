import {useState} from 'react';

import InputImageButton from '../InputDogInfo/InputImage/InputImageButton';
import InputNameButton from '../InputDogInfo/InputName/InputNameButton';
import ShowImage from '../RenderDogInfo/ShowImage';
import ShowName from '../RenderDogInfo/ShowName';

export default function DogInfoBar() {
	const [submittedItem, setSubmittedItems] = useState({enteredName: '', image: ''});

	const addNewInfo = prevItem => {
		const newInfoItems = {...submittedItem, ...prevItem};
		setSubmittedItems(newInfoItems);
	};

	return (
		<>
			<section>
				<InputNameButton addNewInfo={addNewInfo} />
				<InputImageButton addNewInfo={addNewInfo} />
			</section>
			<section>
				<ShowName name={submittedItem.enteredName} />
				<ShowImage image={submittedItem.image} />
			</section>
		</>
	);
}
