import styled from 'styled-components';

export default function BackgroundHistory() {
	return (
		<div>
			<Shape1 />
			<Shape2 />
			<Shape3 />
		</div>
	);
}

const Shape1 = styled.div`
	position: absolute;
	z-index: -1;
	top: 0;
	width: 10px;
	height: 10px;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	background-color: #ffbaa5;
`;

const Shape2 = styled.div`
	position: absolute;
	z-index: -1;
	bottom: 0;
	width: 150px;
	height: 120px;
	border-radius: 30% 70% 29% 71% / 30% 75% 25% 70%;
	background-color: #ffbaa5;
`;

const Shape3 = styled.div`
	position: absolute;
	z-index: -1;
	right: 10%;
	bottom: 10%;
	width: 150px;
	height: 120px;
	border-radius: 62% 38% 29% 71% / 74% 35% 65% 26%;
	background-color: #ffbaa5;
`;
