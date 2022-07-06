import {ModalContainer, Modal} from './styled';

export default function FormModal({children}) {
	return (
		<ModalContainer>
			<Modal open>{children}</Modal>
		</ModalContainer>
	);
}
