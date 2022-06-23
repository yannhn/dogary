import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const FoodCardContainer = styled.section`
	border: 1px solid black;
	border-radius: 10px;
	margin: 2em;
	padding: 0.2em 1em;
`;

const FoodCardHead = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const FoodCardButton = styled.button`
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

const FoodInfoContainer = styled.section`
	display: flex;
	justify-content: space-between;
`;

const FoodInfo = styled.section`
	font-weight: light;
	text-align: start;
	color: grey;
	align-self: flex-end;
	font-size: 0.8rem;
`;

const FoodCounter = styled.p`
	font-weight: light;
	text-align: end;
	color: grey;
	align-self: flex-end;
	font-size: 0.8rem;
`;

export {FoodCardContainer, FoodCardButton, FoodInfoContainer, FoodCardHead, FoodCounter, FoodInfo};
