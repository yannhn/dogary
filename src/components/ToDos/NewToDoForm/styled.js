import styled from 'styled-components';

const NewToDoFormContainer = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2em;
	margin-bottom: 2em;
`;

const NewToDoInput = styled.input`
	padding: 0.5rem;
	border: none;
	// TODO: Fix width
	min-width: 15em;
	font-size: 1rem;
	background: white;
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;
`;

const NewToDoButton = styled.button`
	padding: 0.62rem 2em;
	border: none;
	color: white;
	background: #1f2b4d;
	cursor: pointer;

	transition: all 0.3s ease;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;

	&:focus-visible {
		box-shadow: 0 0 0 5px red;
	}

	&:hover {
		background: #ff6f47;
	}

	&:active {
		background: #bbb;
	}
`;

export {NewToDoFormContainer, NewToDoInput, NewToDoButton};
