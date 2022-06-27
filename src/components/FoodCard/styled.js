import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const FoodCardContainer = styled.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;
`;

const FoodCardHead = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	align-self: flex-end;
	font-weight: light;
	color: grey;
	font-size: 0.8rem;
	text-align: start;
`;

const FoodCounter = styled.p`
	align-self: flex-end;
	font-weight: light;
	color: grey;
	font-size: 0.8rem;
	text-align: end;
`;

export {FoodCardContainer, FoodCardButton, FoodInfoContainer, FoodCardHead, FoodCounter, FoodInfo};
