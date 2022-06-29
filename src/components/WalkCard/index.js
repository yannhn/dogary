import {useState} from 'react';

import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkInfoContainer, WalkCardHead, WalkInfo, WalkCounter} from './styled';

export default function WalkCard() {
	const [walkItem, setWalkItem] = useState([]);
	const [showForm, setShowForm] = useState(false);

	function addNewWalkItem(prevItem) {
		const newWalkItem = [...walkItem, prevItem];
		setWalkItem(newWalkItem);
	}

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
						<p>Duration: 120 h/m</p>
						<p>When: 12:00 starting</p>
					</WalkInfo>
					<WalkCounter>120/ goal</WalkCounter>
				</WalkInfoContainer>
			</WalkCardContainer>
			{showForm && <InputWalk addNewWalkItem={addNewWalkItem} />}
		</>
	);
}
