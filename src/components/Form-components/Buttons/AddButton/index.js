import {StyledAddButton} from './styled';

export default function AddButton({buttonText, cancelForm}) {
	return (
		<>
			<StyledAddButton onClick={cancelForm}>{buttonText}</StyledAddButton>
		</>
	);
}
