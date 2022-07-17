import styled from 'styled-components';

const InputBusinessContainer = styled.section`
	padding: 0.2em 2em;
`;

const InputBusinessForm = styled.form`
	margin-bottom: 2em;
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

const InputBusinessButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1em;
`;

const LastSubmitSection = styled.section`
	border: 1px solid black;
	border-radius: 5px;
`;

export {
	InputBusinessContainer,
	InputBusinessForm,
	InputBusinessCheckboxSection,
	InputBusinessSection,
	InputBusinessButtonGroup,
	LastSubmitSection,
};
