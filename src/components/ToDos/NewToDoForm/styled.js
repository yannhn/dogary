import styled from 'styled-components';

const NewToDoFormContainer = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2em;
	margin-bottom: 2em;
`;

const NewToDoInput = styled.input`
	width: 15em;
	padding: 0.5rem;
	border: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background: white;
	font-size: 1rem;
	text-align: auto;
`;

const NewToDoButton = styled.button`
	padding: 0.62rem 2em;
	transition: all 0.3s ease;
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: #1f2b4d;
	color: white;
	cursor: pointer;

	&:focus-visible {
		box-shadow: 0 0 0 5px red;
	}

	&:hover {
		background: #64b6ac;
	}

	&:active {
		background: #bbb;
	}
`;

export {NewToDoFormContainer, NewToDoInput, NewToDoButton};
