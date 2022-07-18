import {StyledCancelButton} from './styled';

export default function CancelButton({buttonText, cancelForm}) {
	return (
		<>
			<StyledCancelButton onClick={cancelForm}>{buttonText}</StyledCancelButton>
		</>
	);
}
