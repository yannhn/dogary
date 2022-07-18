import {StyledContainer, StyledPicture} from './styled';

export default function ShowImage({image}) {
	return (
		<StyledContainer>
			<StyledPicture src={image ? image : 'https://placedog.net/800/640?id=12'} />
		</StyledContainer>
	);
}
