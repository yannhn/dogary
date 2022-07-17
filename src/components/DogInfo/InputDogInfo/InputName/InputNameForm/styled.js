import styled from 'styled-components';

const InputInfoContainer = styled.section`
	padding: 0.2em 1em;
`;

const InfoForm = styled.form`
	text-align: center;
`;

const InputNameText = styled.input`
	margin: 1em auto 2em;
	padding: 0.6em;
	border: 1px solid black;
	border-radius: 5px;
	font-size: 1rem;
	text-align: center;
`;

const ButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
`;

const CancelButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;

	&:hover {
		background: #aa3936;
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

	&:hover {
		background: #559c93;
	}

	&:active {
		background: #bad;
	}
`;

export {InputInfoContainer, InfoForm, ButtonGroup, CancelButton, AddButton, InputNameText};
