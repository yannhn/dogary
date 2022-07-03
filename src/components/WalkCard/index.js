import {useState} from 'react';

import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkCardHead, WalkCounter} from './styled';

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
				{walkItem.map(item => (
					<section key={item.id}>
						<p>Duration: {item.duration} m/h</p>
						<p>When started: {item.start}</p>
					</section>
				))}
				<WalkCounter>120/ goal</WalkCounter>
			</WalkCardContainer>
			{showForm && <InputWalk addNewWalkItem={addNewWalkItem} />}
		</>
	);
}
