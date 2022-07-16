import styled from 'styled-components';

const InputFoodContainer = styled.section`
	padding: 0.2em 2em;
`;

const InputFoodForm = styled.form`
	margin-bottom: 2em;
`;

const InputFoodHeader = styled.h2`
	display: flex;
	justify-content: center;
`;

const InputFoodSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InputFoodButtonGroup = styled.section`
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

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

const LastSubmitSection = styled.section`
	border: 1px solid black;
	border-radius: 5px;
`;

export {
	InputFoodContainer,
	InputFoodForm,
	InputFoodHeader,
	InputFoodSection,
	InputFoodButtonGroup,
	CancelButton,
	AddButton,
	LastSubmitSection,
};
