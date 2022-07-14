import {StyledPicture} from './styled';

export default function ShowImage({styledImage}) {
	return (
		<>
			<StyledPicture src={styledImage ? styledImage : 'https://placedog.net/800/640?id=12'} />
		</>
	);
}
