import styled from 'styled-components';

const StyledAddButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #64b6ac;
	color: #fff;
	font-size: 1em;
	cursor: pointer;

	&:hover {
		background: #559c93;
	}

	&:active {
		background: #bad;
	}
`;

export {StyledAddButton};
