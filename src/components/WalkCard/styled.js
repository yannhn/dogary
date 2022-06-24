import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const WalkCardContainer = styled.section`
	border: 1px solid black;
	margin: 2em;
	border-radius: 10px;

	padding: 0.2em 1em;
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
	font-weight: light;
	align-self: flex-end;
	color: grey;
	text-align: start;

	font-size: 0.8rem;
`;

const WalkCounter = styled.p`
	font-weight: light;
	align-self: flex-end;
	color: grey;
	text-align: end;

	font-size: 0.8rem;
`;

export {WalkCardContainer, WalkCardHead, WalkCardButton, WalkInfoContainer, WalkInfo, WalkCounter};
