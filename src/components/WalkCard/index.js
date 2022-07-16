import {Icon} from '@iconify/react';
import {useState} from 'react';

import FormModal from '../FormModal';
import HistoryModal from '../HistoryModal';
import InputWalk from '../InputWalk/index';

import {
	WalkCardContainer,
	WalkInfoContainer,
	WalkCardHeaderGroup,
	WalkCardButtonGroup,
	WalkCardButtonAdd,
	BusinessCardButtonHistory,
} from './styled';

export default function WalkCard() {
	const [showForm, setShowForm] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
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

	function onCancelHistoryForm() {
		setShowHistory(!showHistory);
	}

	return (
		<>
			<WalkCardContainer>
				<WalkInfoContainer>
					<WalkCardHeaderGroup>
						<h2>Walks</h2>
						<WalkCardButtonGroup>
							<BusinessCardButtonHistory
								onClick={() => {
									setShowHistory(!showHistory);
								}}
							>
								<Icon
									icon="mdi:history"
									width="1.6rem"
									height="1.6rem"
									color="white"
									alt="show history"
								/>
							</BusinessCardButtonHistory>
							<WalkCardButtonAdd
								onClick={() => {
									setShowForm(!showForm);
								}}
							>
								<Icon
									icon="mdi:plus-circle"
									width="1.6rem"
									height="1.6rem"
									color="white"
									alt="add activity"
								/>
							</WalkCardButtonAdd>
						</WalkCardButtonGroup>
					</WalkCardHeaderGroup>
					<p>Take a walk in your dogs shoes</p>
				</WalkInfoContainer>
				<section>
					<p>Todays duration: {count.result} min</p>
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
			{showHistory && (
				<HistoryModal onCancelHistoryForm={onCancelHistoryForm}>
					{uniqueDates
						.sort((a, b) => new Date(b) - new Date(a))
						.map(date => (
							<section key={date}>
								<h2>{date}</h2>
								{walkItem
									.filter(walk => walk.date === date)
									.map(walk => (
										<section key={walk.id}>
											<p>Duration: {walk.duration} h/m</p>
											<p>When started: {walk.startTime}</p>
										</section>
									))}
							</section>
						))}
				</HistoryModal>
			)}
		</>
	);
}
