import styled from 'styled-components';

const HeadingContainer = styled.section`
	display: inline-block;
	margin-bottom: 1em;
`;

const FilterButton = styled.button`
	gap: 2em;
	border: 1px solid white;
	background: red;
	color: white;
	font-size: 1rem;
	cursor: pointer;

	&:focus-visible {
		box-shadow: 0 0 0 5px red;
	}

	&:focus {
		outline: 0;
	}

	&:hover {
		background: #ccc;
	}
	&:active {
		background: #bbb;
	}
`;

export {FilterButton, HeadingContainer};
