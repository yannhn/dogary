import {useState} from 'react';

import InputBusiness from '../InputBusiness/index';

import {BusinessCardContainer, BusinessCardHead, BusinessCardButton} from './styled';

export default function BusinessCard() {
	const [showForm, setShowForm] = useState(false);
	const [businessItems, setBusinessItems] = useState([]);

	function addNewBusinessItem(prevItem) {
		const newBusinessItems = [...businessItems, prevItem];
		setBusinessItems(newBusinessItems);
	}

	return (
		<>
			<BusinessCardContainer>
				<BusinessCardHead>
					<section>
						<h2>Business</h2>
						<p>A dog has to do what a dog has to do</p>
					</section>
					<BusinessCardButton onClick={() => setShowForm(!showForm)}>
						{showForm ? '-' : '+'}
					</BusinessCardButton>
				</BusinessCardHead>
				{businessItems.map(item => (
					<section key={item.id}>
						<p>
							What:{' '}
							{item.smallBusiness && item.bigBusiness
								? 'double business'
								: item.smallBusiness
								? 'small business'
								: item.bigBusiness
								? 'big business'
								: 'No business (Sometimes your dog is simply just not in the right mood. You might have to try again later.)'}
						</p>
						<p>When: {item.time}</p>
						<hr></hr>
					</section>
				))}
			</BusinessCardContainer>
			{showForm && <InputBusiness addNewBusinessItem={addNewBusinessItem} />}
		</>
	);
}
