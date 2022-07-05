import styled from 'styled-components';

const ModalContainer = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5); ;
`;

const Modal = styled.dialog`
	max-width: 480px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 10px;
	background: #fff;
`;

export {ModalContainer, Modal};
