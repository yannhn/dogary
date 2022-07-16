import styled from 'styled-components';

export default function Background() {
	return (
		<div>
			<TestStyle></TestStyle>
			<TestStyle2></TestStyle2>
			<TestStyle3></TestStyle3>
		</div>
	);
}

const TestStyle = styled.div`
	background-color: #ffbaa5;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	height: 200px;
	width: 200px;
	position: absolute;
	top: 0;
	z-index: -1;
`;

const TestStyle2 = styled.div`
	background-color: #ffbaa5;
	border-radius: 30% 70% 29% 71% / 30% 75% 25% 70%;
	height: 120px;
	width: 150px;
	position: absolute;
	bottom: 0;
	z-index: -1;
`;

const TestStyle3 = styled.div`
	background-color: #ffbaa5;
	border-radius: 62% 38% 29% 71% / 74% 35% 65% 26%;
	height: 120px;
	width: 150px;
	position: absolute;
	bottom: 20%;
	right: 10%;
	z-index: -1;
`;
