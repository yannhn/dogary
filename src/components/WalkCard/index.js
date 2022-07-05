import {useState} from 'react';

import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkCardHead, WalkCardButton} from './styled';

export default function WalkCard() {
	const [showForm, setShowForm] = useState(false);
	const [walkItem, setWalkItem] = useState([]);

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
						<p>Sum Duration: </p>
					</section>
					<WalkCardButton
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						{showForm ? '-' : '+'}
					</WalkCardButton>
				</WalkCardHead>
				{walkItem.map(item => (
					<section key={item.id}>
						<p>Duration: {item.duration} h/m</p>
						<p>When started: {item.startTime}</p>
						<p>result: {item.result}</p>
						<hr></hr>
					</section>
				))}
			</WalkCardContainer>
			{showForm && <InputWalk addNewWalkItem={addNewWalkItem} />}
		</>
	);
}
