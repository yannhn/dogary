import {Icon} from '@iconify/react';
import {useState} from 'react';

import FormModal from '../FormModal';
import HistoryModal from '../HistoryModal';
import InputBusiness from '../InputBusiness/index';

import {
	BusinessCardContainer,
	BusinessInfoContainer,
	BusinessCardHeaderGroup,
	BusinessCardButtonGroup,
	BusinessCardButtonHistory,
	BusinessCardButtonAdd,
} from './styled';

export default function BusinessCard() {
	const [showForm, setShowForm] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [businessItems, setBusinessItems] = useState([]);

	const addNewBusinessItem = prevItem => {
		const newBusinessItems = [...businessItems, prevItem];
		setBusinessItems(newBusinessItems);
	};

	const cancelForm = () => {
		setShowForm(!showForm);
	};

	const onCancelHistoryForm = () => {
		setShowHistory(!showHistory);
	};

	const dates = businessItems.map(business => business.date);
	const uniqueDates = [...new Set(dates)];
	const lastSubmit = businessItems[businessItems.length - 1];

	return (
		<>
			<BusinessCardContainer>
				<BusinessInfoContainer>
					<BusinessCardHeaderGroup>
						<h2>Business</h2>
						<BusinessCardButtonGroup>
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
							<BusinessCardButtonAdd onClick={() => setShowForm(!showForm)}>
								<Icon
									icon="mdi:plus-circle"
									width="1.6rem"
									height="1.6rem"
									color="white"
									alt="add activity"
								/>
							</BusinessCardButtonAdd>
						</BusinessCardButtonGroup>
					</BusinessCardHeaderGroup>
					<p>A dog has to do what a dog has to do</p>
				</BusinessInfoContainer>
				{lastSubmit && (
					<section>
						<h4>Last business</h4>
						<p>
							{lastSubmit.smallBusiness && lastSubmit.bigBusiness
								? 'double business'
								: lastSubmit.smallBusiness
								? 'small business'
								: lastSubmit.bigBusiness
								? 'big business'
								: 'No business yet! (Sometimes your dog is simply just not in the right mood. You might have to try again later.)'}
						</p>
						<p>When: {lastSubmit.time}</p>
					</section>
				)}
			</BusinessCardContainer>
			{showForm && (
				<FormModal>
					<InputBusiness
						addNewBusinessItem={addNewBusinessItem}
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
								{businessItems
									.filter(businessItem => businessItem.date === date)
									.map(businessItem => (
										<section key={businessItem.id}>
											<p>
												Type:{' '}
												{businessItem.smallBusiness &&
												businessItem.bigBusiness
													? 'double business'
													: businessItem.smallBusiness
													? 'small business'
													: businessItem.bigBusiness
													? 'big business'
													: 'No business!'}
											</p>
											<p>When: {businessItem.time}</p>
										</section>
									))}
							</section>
						))}
				</HistoryModal>
			)}
		</>
	);
}
