import {StyledPicture} from './styled';

export default function ShowImage({image}) {
	return (
		<>
			<StyledPicture src={image ? image : 'https://placedog.net/800/640?id=12'} />
		</>
	);
}
