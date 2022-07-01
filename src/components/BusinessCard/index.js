import {useState} from 'react';

import InputBusiness from '../InputBusiness/index';

import {BusinessCardContainer, BusinessCardHead, BusinessCardButton} from './styled';

export default function BusinessCard() {
	const [showForm, setShowForm] = useState(false);
	const [items, setItems] = useState([]);

	const addItems = event => {
		setItems(prevEvents => {
			return [...prevEvents, event];
		});
	};

	return (
		<>
			<BusinessCardContainer>
				<BusinessCardHead>
					<h2>A dogs business</h2>
					<BusinessCardButton onClick={() => setShowForm(!showForm)}>
						{showForm ? '-' : '+'}
					</BusinessCardButton>
				</BusinessCardHead>
				<section>
					<section>
						{items.map(item => (
							<section key={item.id}>
								<p>
									What:{' '}
									{item.smallBusiness && item.bigBusiness
										? 'double business'
										: item.smallBusiness
										? 'small business'
										: item.bigBusiness
										? 'big business'
										: 'No business (Sometimes your dog is simply just not in the right mood. Might have to try again later.)'}
								</p>
								<p>When: {item.time}</p>
								<hr></hr>
							</section>
						))}
					</section>
				</section>
			</BusinessCardContainer>
			{showForm && <InputBusiness addItems={addItems} />}
		</>
	);
}
