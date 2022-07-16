import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const WalkCardContainer = styled.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: none;
	border-radius: 5px;
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; // 1 bei box-shadow
`;

const WalkCardHead = styled.article`
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

export {WalkCardContainer, WalkCardHead, WalkCardButton};
