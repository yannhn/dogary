import styled from 'styled-components';

const GoalForm = styled.form`
	padding: 0.2em 2em;
`;
const InputGoalHeader = styled.h2`
	text-align: center;
`;

const InputGoalSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
`;

const InputGoalLabel = styled.label`
	margin-bottom: 0.4em;
`;

const InputGoalAmount = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputGoalButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin: 2em 0 1em;
`;

export {
	GoalForm,
	InputGoalHeader,
	InputGoalSection,
	InputGoalLabel,
	InputGoalAmount,
	InputGoalButtonGroup,
};
