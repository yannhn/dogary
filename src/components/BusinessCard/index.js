import {useState} from 'react';

import FormModal from '../FormModal';
import HistoryModal from '../HistoryModal';
import InputBusiness from '../InputBusiness/index';

import {BusinessCardContainer, BusinessCardHead, BusinessCardButton} from './styled';

export default function BusinessCard() {
	const [showForm, setShowForm] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [businessItems, setBusinessItems] = useState([]);
	const [submittedBusinessItem, setSubmittedBusinessItem] = useState({});

	const dates = businessItems.map(business => business.date);
	const uniqueDates = [...new Set(dates)];

	function addSubmittedItem(prevItem) {
		const newItem = {...businessItems, ...prevItem};
		setSubmittedBusinessItem(newItem);
	}

	function addNewBusinessItem(prevItem) {
		const newBusinessItems = [...businessItems, prevItem];
		setBusinessItems(newBusinessItems);
	}

	function cancelForm() {
		setShowForm(!showForm);
	}

	function onCancelHistoryForm() {
		setShowHistory(!showHistory);
	}

	return (
		<>
			<BusinessCardContainer>
				<BusinessCardHead>
					<section>
						<h2>Business</h2>
						<p>A dog has to do what a dog has to do</p>
					</section>
					<button
						onClick={() => {
							setShowHistory(!showHistory);
						}}
					>
						{showHistory ? 'Hide History' : 'Show History'}
					</button>
					<BusinessCardButton onClick={() => setShowForm(!showForm)}>
						{showForm ? '-' : '+'}
					</BusinessCardButton>
				</BusinessCardHead>
				<section>
					<p>
						What:{' '}
						{submittedBusinessItem.smallBusiness && submittedBusinessItem.bigBusiness
							? 'double business'
							: submittedBusinessItem.smallBusiness
							? 'small business'
							: submittedBusinessItem.bigBusiness
							? 'big business'
							: 'No business yet! (Sometimes your dog is simply just not in the right mood. You might have to try again later.)'}
					</p>
					<p>When: {submittedBusinessItem.time}</p>
					<hr></hr>
				</section>
			</BusinessCardContainer>
			{showForm && (
				<FormModal>
					<InputBusiness
						addNewBusinessItem={addNewBusinessItem}
						addSubmittedItem={addSubmittedItem}
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
											<p>small: {businessItem.smallBusiness}</p>
											<p>big: {businessItem.bigBusiness}</p>
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
