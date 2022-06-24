import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const WalkCardContainer = styled.section`
	border: 1px solid black;
	border-radius: 10px;
	margin: 2em;
	padding: 0.2em 1em;
`;

const WalkCardHead = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	font-weight: light;
	text-align: start;
	color: grey;
	align-self: flex-end;
	font-size: 0.8rem;
`;

const WalkCounter = styled.p`
	font-weight: light;
	text-align: end;
	color: grey;
	align-self: flex-end;
	font-size: 0.8rem;
`;

export {WalkCardContainer, WalkCardHead, WalkCardButton, WalkInfoContainer, WalkInfo, WalkCounter};
