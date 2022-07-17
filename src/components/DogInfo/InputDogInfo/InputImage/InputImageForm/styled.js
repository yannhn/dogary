import styled from 'styled-components';

const InputInfoContainer = styled.section`
	padding: 0.2em 1em;
`;

const InfoForm = styled.form`
	text-align: center;
`;

const InfoFormInput = styled.input`
	margin: 1em 0 0 0;
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
	cursor: pointer;
	&:hover {
		background: #aa3936;
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
	cursor: pointer;
	&:hover {
		background: #559c93;
	}

	&:active {
		background: #bad;
	}
`;

export {
	InputInfoContainer,
	InfoForm,
	InfoFormInput,
	InfoImgPreview,
	StyledPreviewContainer,
	CancelButton,
	AddButton,
	ButtonGroup,
};
