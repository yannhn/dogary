import {ModalContainer, Modal, StyledHistoryModalHeader, StyledHistoryModalButton} from './styled';

export default function HistoryModal({children, cancelHistoryForm}) {
	return (
		<ModalContainer>
			<Modal open>
				<StyledHistoryModalHeader>
					<h2>History</h2>
					<StyledHistoryModalButton type="button" onClick={cancelHistoryForm}>
						Cancel
					</StyledHistoryModalButton>
				</StyledHistoryModalHeader>
				{children}
			</Modal>
		</ModalContainer>
	);
}
