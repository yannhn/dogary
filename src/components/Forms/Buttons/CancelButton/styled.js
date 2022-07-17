import styled from 'styled-components';

const StyledCancelButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export {StyledCancelButton};
