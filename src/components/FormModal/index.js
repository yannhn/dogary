import BackgroundInput from '../BackgroundInput';

import {ModalContainer, Modal} from './styled';

export default function FormModal({children}) {
	return (
		<ModalContainer>
			<Modal open>
				{children}
				<BackgroundInput />
			</Modal>
		</ModalContainer>
	);
}
