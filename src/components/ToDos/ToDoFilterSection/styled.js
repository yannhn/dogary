import styled from 'styled-components';

const StyledFilterContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1rem 0;
	border-bottom: 1px solid white;
`;

const StyledFilterLabel = styled.label`
	align-self: flex-end;
	color: white;
	font-weight: bold;
`;

const StyledFilterSelect = styled.select`
	margin-bottom: 0.2em;
	padding: 0.4rem 0.4rem;
	border: none;
	border-radius: 5px;
	font-weight: bold;
`;

export {StyledFilterContainer, StyledFilterLabel, StyledFilterSelect};
