import styled from 'styled-components';

const StyledFilterContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1rem 0;
	border-bottom: 1px solid white;
`;

const StyledFilterLabel = styled.label`
	color: white;
	font-weight: bold;
	align-self: flex-end;
`;

const StyledFilterSelect = styled.select`
	padding: 0.4rem 0.4rem;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	margin-bottom: 0.2em;
`;

export {StyledFilterContainer, StyledFilterLabel, StyledFilterSelect};
