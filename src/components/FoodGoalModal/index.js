import BackgroundHistory from '../BackgroundHistory';

import {ModalContainer, Modal, StyledHistoryModalHeader, StyledHistoryModalButton} from './styled';

export default function FoodGoalModal({children, onCancelGoalForm}) {
	return (
		<ModalContainer>
			<Modal open>
				<BackgroundHistory />
				<StyledHistoryModalHeader>
					<h2>History</h2>
					<StyledHistoryModalButton type="button" onClick={onCancelGoalForm}>
						Get back
					</StyledHistoryModalButton>
				</StyledHistoryModalHeader>
				{children}
			</Modal>
		</ModalContainer>
	);
}
