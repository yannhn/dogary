import styled from 'styled-components';

const InputBusinessContainer = styled.section`
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;
`;

const InputBusinessForm = styled.form`
	text-align: center;
`;

const InputBusinessButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1em;
`;

const CancelButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

const AddButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #64b6ac;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export {
	InputBusinessContainer,
	InputBusinessForm,
	InputBusinessButtonGroup,
	CancelButton,
	AddButton,
};
