import styled from 'styled-components';

const BusinessCardContainer = styled.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;
`;

const BusinessCardHead = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BusinessInfoContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BusinessInfo = styled.section`
	color: var(--card-info-color);
	font-size: var(--card-info-fontSize);
	font-weight: var(--card-info-fontWeight);
`;

const BusinessCounter = styled.p`
	color: var(--card-info-color);
	font-size: var(--card-info-fontSize);
	font-weight: var(--card-info-fontWeight);
`;

export {
	BusinessCardContainer,
	BusinessCardHead,
	BusinessInfoContainer,
	BusinessInfo,
	BusinessCounter,
};
