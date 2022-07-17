import styled from 'styled-components';

const ModalContainer = styled.section`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	overflow: hidden;
`;

const Modal = styled.dialog`
	position: fixed;
	z-index: 2;
	top: 30%;
	width: 80%;
	max-height: 80%;
	margin: 0 1em;
	padding: 2em;
	transform: translate(0, -30%);
	border: none;
	border-radius: 5px;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
	overflow-y: auto;
`;

const StyledHistoryModalHeader = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #343d46;
`;

const StyledHistoryModalButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #aa3936;
	}

	&:active {
		background: #bad;
	}
`;

export {ModalContainer, Modal, StyledHistoryModalHeader, StyledHistoryModalButton};
