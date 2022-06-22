import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const FoodCardContainer = styled.section`
	border: 1px solid black;
	border-radius: 10px;
	margin: 6em;
	padding: 1em;
`;

const FoodCardHead = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const FoodCardButton = styled.button`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: blue;
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

export {FoodCardContainer, FoodCardButton, FoodInfoContainer, FoodCardHead};
