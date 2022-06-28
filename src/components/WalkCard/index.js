import {useState} from 'react';

import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkInfoContainer, WalkCardHead, WalkInfo, WalkCounter} from './styled';

export default function WalkCard() {
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			<WalkCardContainer>
				<WalkCardHead>
					<section>
						<h2>Walks</h2>
					</section>
					<button
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						{showForm ? '-' : '+'}
					</button>
				</WalkCardHead>
				<WalkInfoContainer>
					<WalkInfo>
						<p>Duration: 45 minutes</p>
						<p>When: 10:45 - 11:30</p>
					</WalkInfo>
					<WalkCounter>45 m (today) / 120m (goal)</WalkCounter>
				</WalkInfoContainer>
			</WalkCardContainer>
			{showForm && <InputWalk />}
		</>
	);
}
