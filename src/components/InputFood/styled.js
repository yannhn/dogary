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
	margin-bottom: 1em;
`;

const InputFoodLabel = styled.label`
	margin-bottom: 0.4em;
`;

const InputFoodAmount = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputFoodTime = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputFoodDate = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputFoodButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1em;
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
	LastSubmitSection,
	InputFoodLabel,
	InputFoodAmount,
	InputFoodTime,
	InputFoodDate,
};
