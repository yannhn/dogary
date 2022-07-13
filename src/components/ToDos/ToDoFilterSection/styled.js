import styled from 'styled-components';

const StyledFilterContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 1rem 0;
	border-bottom: 1px solid white;
`;

const StyledFilterLabel = styled.label`
	color: white;
	font-weight: bold;
`;

const StyledFilterSelect = styled.select`
	font: inherit;
	padding: 0.5rem 3rem;
	font-weight: bold;
	border-radius: 6px;
`;

export {StyledFilterContainer, StyledFilterLabel, StyledFilterSelect};
