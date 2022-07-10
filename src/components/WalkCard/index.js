import {useState} from 'react';

import FormModal from '../FormModal';
import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkCardHead, WalkCardButton} from './styled';

export default function WalkCard() {
	const [showForm, setShowForm] = useState(false);
	const [walkItem, setWalkItem] = useState([]);
	const [count, setCount] = useState({});

	function addCounter(prevItem) {
		const newCount = {...walkItem, ...prevItem};
		setCount(newCount);
	}

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
				{walkItem.map(item => (
					<section key={item.id}>
						<p>Duration: {item.duration} h/m</p>
						<p>When started: {item.startTime}</p>
						<p>Date: {item.date}</p>
						<hr></hr>
					</section>
				))}
			</WalkCardContainer>
			{showForm && (
				<FormModal>
					<InputWalk addNewWalkItem={addNewWalkItem} addCounter={addCounter} />
				</FormModal>
			)}
			<h4>HISTORY</h4>
			{walkItem
				.sort((a, b) => new Date(b.date) - new Date(a.date))
				.map(item => (
					<section key={item.id}>
						<h2>Date: {item.date}</h2>
						<p>Duration: {item.duration} h/m</p>
						<p>When started: {item.startTime}</p>
						<hr></hr>
					</section>
				))}
		</>
	);
}
