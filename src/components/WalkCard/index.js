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

	const addNewWalkItem = prevItem => {
		const newWalkItem = [...walkItem, prevItem];
		setWalkItem(newWalkItem);
	};

	const cancelForm = () => {
		setShowForm(!showForm);
	};

	const onCancelHistoryForm = () => {
		setShowHistory(!showHistory);
	};

	const dates = walkItem.map(walk => walk.date);
	const uniqueDates = [...new Set(dates)];
	const lastSubmit = walkItem[walkItem.length - 1];
	const walkSum = walkItem.reduce(
		(total, currentValue) => (total = total + currentValue.duration),
		0
	);

	// const convertHoursToMinute = enteredDuration => {
	// 	const hours = enteredDuration.split(':')[0];
	// 	const minutes = enteredDuration.split(':')[1];
	// 	return parseInt(hours) + Number(minutes / 60);
	// };

	// const showHours = convertHoursToMinute(enteredDuration);
	// const showMinutes = showHours * 60;

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
				{lastSubmit && (
					<section>
						<section>
							<p>
								{lastSubmit.duration ? `Duration: ${lastSubmit.duration} h/m` : ''}
							</p>
							<p> {lastSubmit.startTime ? `Time: ${lastSubmit.startTime}` : ''}</p>
						</section>
						<p>{walkSum ? `Todays duration: ${walkSum} min` : ''}</p>
					</section>
				)}
			</WalkCardContainer>
			{showForm && (
				<FormModal>
					<InputWalk addNewWalkItem={addNewWalkItem} cancelForm={cancelForm} />
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
