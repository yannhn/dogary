import styled from 'styled-components';

const FilterContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 1rem 0;
	border-bottom: 1px solid white;
`;

const FilterLabel = styled.label`
	font-weight: bold;
	color: white;
`;

export {FilterContainer, FilterLabel};
