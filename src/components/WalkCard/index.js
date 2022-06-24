import {
	WalkCardContainer,
	WalkCardButton,
	WalkInfoContainer,
	WalkCardHead,
	WalkInfo,
	WalkCounter,
} from './styled';

export default function WalkCard({children}) {
	return (
		<>
			{children}
			<WalkCardContainer>
				<WalkCardHead>
					<section>
						<h2>Walks</h2>
					</section>
					<WalkCardButton>+</WalkCardButton>
				</WalkCardHead>
				<WalkInfoContainer>
					<WalkInfo>
						<p>Duration: 45 minutes</p>
						<p>When: 10:45 - 11:30</p>
					</WalkInfo>
					<WalkCounter>45 m (today) / 120m (goal)</WalkCounter>
				</WalkInfoContainer>
			</WalkCardContainer>
		</>
	);
}
