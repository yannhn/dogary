import styled from 'styled-components';

const StyledFilterContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 1rem 0;
`;

const StyledFilterLabel = styled.label`
	color: white;
	font-weight: bold;
`;

const StyledFilterSelect = styled.select`
	padding: 0.4rem 0.4rem;
	border: none;
	border-radius: 5px;
	font-weight: bold;
`;

export {StyledFilterContainer, StyledFilterLabel, StyledFilterSelect};
