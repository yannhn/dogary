import styled from 'styled-components';

const InputWalkContainer = styled.section`
	padding: 0.2em 2em;
`;

const InputWalkForm = styled.form`
	margin-bottom: 2em;
`;

const InputWalkHeader = styled.h2`
	display: flex;
	justify-content: center;
`;

const InputWalkSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
`;

const InputWalkLabel = styled.label`
	margin-bottom: 0.4em;
`;

const InputWalkDuration = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputWalkStartingTime = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputWalkDate = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputWalkButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1em;
`;

const LastSubmitSection = styled.section`
	border: 1px solid black;
	border-radius: 5px;
`;

export {
	InputWalkContainer,
	InputWalkForm,
	InputWalkHeader,
	InputWalkSection,
	InputWalkLabel,
	InputWalkDuration,
	InputWalkStartingTime,
	InputWalkDate,
	InputWalkButtonGroup,
	LastSubmitSection,
};
