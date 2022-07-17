import styled from 'styled-components';

const WalkCardContainer = styled.section`
	margin: 2em;
	padding: 1em 1em;
	border: none;
	border-radius: 5px;
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`;

const WalkInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #343d46;
`;

const WalkCardHeaderGroup = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const WalkCardButtonGroup = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const WalkCardButtonAdd = styled.button`
	border: none;
	padding: 0.4em 0.6em;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: #343d46;
	cursor: pointer;
`;

const BusinessCardButtonHistory = styled.button`
	border: none;
	padding: 0.4em 0.6em;
	background: #343d46;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	cursor: pointer;
`;

export {
	WalkCardContainer,
	WalkInfoContainer,
	WalkCardHeaderGroup,
	WalkCardButtonGroup,
	WalkCardButtonAdd,
	BusinessCardButtonHistory,
};
