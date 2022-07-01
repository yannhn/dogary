import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const BusinessCardContainer = styled.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;
`;

const BusinessCardHead = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BusinessInfoContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BusinessCardButton = styled.button`
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

export {BusinessCardContainer, BusinessCardHead, BusinessInfoContainer, BusinessCardButton};
