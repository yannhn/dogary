import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto 4em;
	width: 225px;
	height: 225px;
	background-color: #f2cdc4;
	border-radius: 40% 60% 54% 46% / 42% 44% 56% 58%;
`;

const StyledPicture = styled.img`
	width: auto;
	height: auto;
	margin: 1em auto;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;

export {StyledPicture, StyledContainer};
