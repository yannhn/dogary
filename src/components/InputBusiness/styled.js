import styled from 'styled-components';

const InputBusinessContainer = styled.section``;

const InputBusinessForm = styled.form`
	padding: 0.2em 2em;
`;

const InputBusinessHeader = styled.h2`
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #343d46;
`;

const InputBusinessCheckboxSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
`;

const InputBusinessSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
`;

const InputBusinessLabel = styled.label`
	margin-bottom: 0.4em;
`;

const InputBusinessTime = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputBusinessDate = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputBusinessButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin: 2em 0 1em;
`;

const LastSubmitSection = styled.section`
	margin: 0.4em;
	padding: 0.6em;
	border: 4px solid rgb(100, 182, 172);
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
`;

const LastSubmitHeading = styled.h3`
	font-size: 1.4rem;
	text-align: center;
`;

const LastSubmitText = styled.p`
	margin: 1em;
	text-align: center;
`;

export {
	InputBusinessContainer,
	InputBusinessForm,
	InputBusinessHeader,
	InputBusinessLabel,
	InputBusinessCheckboxSection,
	InputBusinessTime,
	InputBusinessDate,
	InputBusinessSection,
	InputBusinessButtonGroup,
	LastSubmitSection,
	LastSubmitHeading,
	LastSubmitText,
};
