import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const ModalContainer = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.dialog`
	max-width: 90%;
	max-height: 70%;
	padding: 2em;
	overflow: hidden;
	overflow-y: scroll !important;
	border-radius: 10px;
	background: #fff;
`;

const StyledHistoryModalHeader = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
`;

const StyledHistoryModalButton = styled.button`
	padding: 0.2em 0.5em;
	border: none;
	border-radius: ${pxToRem(4)};
	background: #343d46;
	color: white;
	font-size: 1em;
	&:hover {
		background: grey;
	}

	&:active {
		background: #bad;
	}
`;

export {ModalContainer, Modal, StyledHistoryModalHeader, StyledHistoryModalButton};
