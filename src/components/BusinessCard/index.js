import {
	BusinessCardContainer,
	BusinessCardHead,
	BusinessInfoContainer,
	BusinessInfo,
	BusinessCounter,
} from './styled';

export default function BusinessCard() {
	return (
		<>
			<BusinessCardContainer>
				<BusinessCardHead>
					<section>
						<h2>A dogs business</h2>
					</section>
				</BusinessCardHead>
				<BusinessInfoContainer>
					<BusinessInfo>
						<p>What: big AND/OR small</p>
						<p>When: at 07:30</p>
					</BusinessInfo>
					<BusinessCounter>
						<p>0 /small</p>
						<p>0 /big</p>
					</BusinessCounter>
				</BusinessInfoContainer>
			</BusinessCardContainer>
		</>
	);
}
