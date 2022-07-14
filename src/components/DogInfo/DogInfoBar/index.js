import {useState} from 'react';

import InputImageButton from '../InputDogInfo/InputImage/InputImageButton';
import InputNameButton from '../InputDogInfo/InputName/InputNameButton';
import ShowImage from '../RenderDogInfo/ShowImage';

export default function DogInfoBar() {
	const [submittedItem, setSubmittedItems] = useState({image: ''});

	const addNewInfo = prevItem => {
		const newInfoItems = {...submittedItem, ...prevItem};
		setSubmittedItems(newInfoItems);
	};

	return (
		<>
			<section>
				<InputNameButton />
				<InputImageButton addNewInfo={addNewInfo} />
			</section>
			<section>
				<ShowImage styledImage={submittedItem.image}></ShowImage>
			</section>
		</>
	);
}
