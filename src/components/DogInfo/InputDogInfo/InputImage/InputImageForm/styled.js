import styled from 'styled-components';

const InputInfoContainer = styled.section`
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 5px;
`;

const InfoForm = styled.form`
	text-align: center;
`;

const StyledPreviewContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 225px;
	height: 225px;
	margin: 0 auto 3em;
	border-radius: 40% 60% 54% 46% / 42% 44% 56% 58%;
	background-color: #f2cdc4;
`;

const InfoImgPreview = styled.img`
	margin: 1em auto;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;

const ButtonGroup = styled.section`
	display: flex;
	justify-content: space-evenly;
`;

const CancelButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

const AddButton = styled.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #64b6ac;
	color: #fff;
	font-size: 1em;

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export {
	InputInfoContainer,
	InfoForm,
	InfoImgPreview,
	StyledPreviewContainer,
	CancelButton,
	AddButton,
	ButtonGroup,
};
