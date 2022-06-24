import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const WalkCardContainer = styled.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;
`;

const WalkCardHead = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const WalkCardButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: ${pxToRem(4)};
	background: #343d46;
	color: white;
	font-size: 1em;

	&:hover {
		background: grey;
	}

	&:active {
		background: #bad;
	}
`;

const WalkInfoContainer = styled.section`
	display: flex;
	justify-content: space-between;
`;

const WalkInfo = styled.section`
	align-self: flex-end;
	font-weight: light;
	font-size: 0.8rem;
	color: grey;
	text-align: start;
`;

const WalkCounter = styled.p`
	align-self: flex-end;
	font-weight: light;
	font-size: 0.8rem;
	color: grey;
	text-align: end;
`;

export {WalkCardContainer, WalkCardHead, WalkCardButton, WalkInfoContainer, WalkInfo, WalkCounter};
