import styled from 'styled-components';

const WalkCardContainer = styled.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;
`;

const WalkCardHead = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const WalkInfoContainer = styled.section`
	display: flex;
	justify-content: space-between;
`;

const WalkInfo = styled.section`
	align-self: flex-end;
	color: var(--card-info-color);
	font-size: var(--card-info-fontSize);
	font-weight: var(--card-info-fontWeight);
	text-align: start;
`;

const WalkCounter = styled.p`
	align-self: flex-end;
	color: var(--card-info-color);
	font-size: var(--card-info-fontSize);
	font-weight: var(--card-info-fontWeight);
	text-align: end;
`;

export {WalkCardContainer, WalkCardHead, WalkInfoContainer, WalkInfo, WalkCounter};
