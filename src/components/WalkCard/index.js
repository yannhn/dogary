import {useState} from 'react';

import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkInfoContainer, WalkCardHead, WalkInfo, WalkCounter} from './styled';

export default function WalkCard() {
	const [walkItem, setWalkItem] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [submittedDuration, setSubmittedDuration] = useState('');
	const [submittedStartTime, setSubmittedStartTime] = useState('');
	const [enteredDuration, setEnteredDuration] = useState('00:00');
	const [enteredStartTime, setEnteredStartTime] = useState('00:00');

	function addNewWalkItem(prevItem) {
		const newWalkItem = [...walkItem, prevItem];
		setWalkItem(newWalkItem);
	}

	// const splitTotal = submittedDuration.split(':').map(Number);
	// console.log(splitTotal);

	const walkTotal = walkItem.reduce(
		(previousDuration, currentDuration) => previousDuration + currentDuration.duration,
		0
	);

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
						<p>Duration: {submittedDuration} h/m</p>
						<p>When: {submittedStartTime} starting</p>
					</WalkInfo>
					<WalkCounter>{walkTotal}/ goal</WalkCounter>
				</WalkInfoContainer>
			</WalkCardContainer>
			{showForm && (
				<InputWalk
					addNewWalkItem={addNewWalkItem}
					setSubmittedDuration={setSubmittedDuration}
					setSubmittedStartTime={setSubmittedStartTime}
					enteredDuration={enteredDuration}
					enteredStartTime={enteredStartTime}
					setEnteredDuration={setEnteredDuration}
					setEnteredStartTime={setEnteredStartTime}
				/>
			)}
		</>
	);
}
