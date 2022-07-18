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
	right: 10%;
	width: 45px;
	height: 45px;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	opacity: 0.2;
	background-color: #b9e6ff;
`;

const Shape2 = styled.div`
	position: absolute;
	z-index: -1;
	bottom: 50%;
	width: 75px;
	height: 80px;
	border-radius: 30% 70% 29% 71% / 30% 75% 25% 70%;
	opacity: 0.2;
	background-color: #b9e6ff;
`;

const Shape3 = styled.div`
	position: absolute;
	z-index: -1;
	right: 0%;
	bottom: 0%;
	width: 75px;
	height: 60px;
	border-radius: 62% 38% 29% 71% / 74% 35% 65% 26%;
	opacity: 0.2;
	background-color: #b9e6ff;
`;
