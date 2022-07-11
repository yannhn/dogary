import {useState} from 'react';

import FormModal from '../FormModal';
import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkCardHead, WalkCardButton} from './styled';

export default function WalkCard() {
	const [showForm, setShowForm] = useState(false);
	const [walkItem, setWalkItem] = useState([]);
	const [count, setCount] = useState({});

	const dates = walkItem.map(walk => walk.date);
	const uniqueDates = [...new Set(dates)];

	function addCounter(prevItem) {
		const newCount = {...walkItem, ...prevItem};
		setCount(newCount);
	}

	function addNewWalkItem(prevItem) {
		const newWalkItem = [...walkItem, prevItem];
		setWalkItem(newWalkItem);
	}

	function cancelForm() {
		setShowForm(!showForm);
	}

	return (
		<>
			<WalkCardContainer>
				<WalkCardHead>
					<section>
						<h2>Walks</h2>
						<p>Todays duration: {count.result} min</p>
					</section>
					<WalkCardButton
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						{showForm ? '-' : '+'}
					</WalkCardButton>
				</WalkCardHead>
				<section>
					<p>Duration: {count.duration} h/m</p>
					<p>When started: {count.startTime}</p>
				</section>
			</WalkCardContainer>
			{showForm && (
				<FormModal>
					<InputWalk
						addNewWalkItem={addNewWalkItem}
						addCounter={addCounter}
						cancelForm={cancelForm}
					/>
				</FormModal>
			)}
			<h4>HISTORY</h4>
			{uniqueDates
				.sort((a, b) => new Date(b) - new Date(a))
				.map(date => (
					<section key={date}>
						<h2>Date: {date}</h2>
						{walkItem
							.filter(walk => walk.date === date)
							.map(walk => (
								<section key={walk.id}>
									<p>Duration: {walk.duration} h/m</p>
									<p>When started: {walk.startTime}</p>
								</section>
							))}
						<hr></hr>
					</section>
				))}
		</>
	);
}
