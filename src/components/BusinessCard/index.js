import {useState} from 'react';

import FormModal from '../FormModal';
import HistoryModal from '../HistoryModal';
import InputBusiness from '../InputBusiness/index';

import {BusinessCardContainer, BusinessCardHead, BusinessCardButton} from './styled';

export default function BusinessCard() {
	const [showForm, setShowForm] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [businessItems, setBusinessItems] = useState([]);

	const dates = businessItems.map(business => business.date);
	const uniqueDates = [...new Set(dates)];

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

	const lastSubmit = businessItems[businessItems.length - 1];
	console.log(lastSubmit);

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
					<section>
						{lastSubmit && (
							<section>
								<p>
									What:{' '}
									{lastSubmit.smallBusiness && lastSubmit.bigBusiness
										? 'double business'
										: lastSubmit.smallBusiness
										? 'small business'
										: lastSubmit.bigBusiness
										? 'big business'
										: 'No business yet! (Sometimes your dog is simply just not in the right mood. You might have to try again later.)'}
								</p>
								<p>When: {lastSubmit.time}</p>
								<hr></hr>
							</section>
						)}
					</section>
				</section>
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
												What:{' '}
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
