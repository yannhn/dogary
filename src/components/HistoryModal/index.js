import BackgroundHistory from '../BackgroundHistory';

import {ModalContainer, Modal, StyledHistoryModalHeader, StyledHistoryModalButton} from './styled';

export default function HistoryModal({children, onCancelHistoryForm}) {
	return (
		<ModalContainer>
			<Modal open>
				<BackgroundHistory />
				<StyledHistoryModalHeader>
					<h2>History</h2>
					<StyledHistoryModalButton type="button" onClick={onCancelHistoryForm}>
						Get back
					</StyledHistoryModalButton>
				</StyledHistoryModalHeader>
				{children}
			</Modal>
		</ModalContainer>
	);
}
