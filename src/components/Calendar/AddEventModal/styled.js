import styled from 'styled-components';

const InputCalendarDateContainer = styled.section`
	margin: 1em;
	border-radius: 10px;
	background: rgb(255, 255, 255);
	background: linear-gradient(285deg, rgba(255, 255, 255, 1) 0%, rgba(249, 248, 248, 1) 50%);
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`;

const InputCalendarDateForm = styled.form`
	padding: 0.2em 2em;
`;

const InputCalendarDateHeader = styled.h3`
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #343d46;
`;

const InputCalendarSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
`;

const InputCalendarLabel = styled.label`
	margin-bottom: 0.4em;
	text-align: center;
`;

const InputCalendarDate = styled.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

const InputCalendarButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
	margin: 2em 0 1em;
`;

const InputCalendarButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #64b6ac;
	color: #fff;
	font-size: 1em;
	cursor: pointer;

	&:hover {
		background: #559c93;
	}

	&:active {
		background: #bad;
	}
`;

export {
	InputCalendarDateContainer,
	InputCalendarDateForm,
	InputCalendarDateHeader,
	InputCalendarSection,
	InputCalendarLabel,
	InputCalendarDate,
	InputCalendarButtonGroup,
	InputCalendarButton,
};
