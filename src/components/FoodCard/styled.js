import styled from 'styled-components';

const FoodInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #343d46;
`;

const FoodCardHeaderGroup = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const FoodCardButtonGroup = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const FoodCardButtonGoal = styled.button`
	padding: 0.4em 0.6em;
	border: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background: #343d46;
	cursor: pointer;
`;

const FoodCardButtonHistory = styled.button`
	padding: 0.4em 0.6em;
	border: none;
	background: #343d46;
	cursor: pointer;

	&:hover {
		background: #1a1f24;
	}
`;

const FoodCardButtonAdd = styled.button`
	padding: 0.4em 0.6em;
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: #343d46;
	cursor: pointer;

	&:hover {
		background: #1a1f24;
	}
`;

export {
	FoodInfoContainer,
	FoodCardHeaderGroup,
	FoodCardButtonGroup,
	FoodCardButtonGoal,
	FoodCardButtonHistory,
	FoodCardButtonAdd,
};
