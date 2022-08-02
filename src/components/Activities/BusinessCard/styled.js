import styled from 'styled-components';

const BusinessInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #343d46;
`;

const BusinessCardHeaderGroup = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const BusinessCardButtonGroup = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const BusinessCardButtonHistory = styled.button`
	padding: 0.4em 0.6em;
	border: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background: #343d46;
	cursor: pointer;

	&:hover {
		background: #1a1f24;
	}
`;

const BusinessCardButtonAdd = styled.button`
	padding: 0.4em 0.6em;
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: #343d46;
	cursor: pointer;

	&:hover {
		background: #1a1f24;
	}
`;

export {
	BusinessInfoContainer,
	BusinessCardButtonHistory,
	BusinessCardButtonAdd,
	BusinessCardButtonGroup,
	BusinessCardHeaderGroup,
};
