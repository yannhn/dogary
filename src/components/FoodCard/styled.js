import styled from 'styled-components';

const FoodCardContainer = styled.section`
	margin: 2em;
	padding: 1em 1em;
	border: none;
	border-radius: 5px;
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; // 1 bei box-shadow
`;

// box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; // 22
// box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
// box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

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

const FoodCardButtonHistory = styled.button`
	border: none;
	padding: 0.4em 0.6em;
	background: #343d46;
`;

const FoodCardButtonAdd = styled.button`
	border: none;
	padding: 0.4em 0.6em;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: #343d46;
`;

export {
	FoodCardContainer,
	FoodInfoContainer,
	FoodCardHeaderGroup,
	FoodCardButtonGroup,
	FoodCardButtonHistory,
	FoodCardButtonAdd,
};
