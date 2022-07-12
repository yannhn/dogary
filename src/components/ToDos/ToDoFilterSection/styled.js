import styled from 'styled-components';

const HeadingContainer = styled.section`
	display: inline-flex;
	justify-content: space-between;
	margin-bottom: 1em;
`;

const FilterButton = styled.button`
	border: none;
	border-radius: 5px;
	background: crimson;
	color: white;
	font-size: 2rem;
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
