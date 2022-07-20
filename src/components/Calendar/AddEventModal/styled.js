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

export {InputCalendarDateContainer, InputCalendarDateForm, InputCalendarDateHeader};
