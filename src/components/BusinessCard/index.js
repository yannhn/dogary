import {nanoid} from 'nanoid';
import {useState} from 'react';

import InputBusiness from '../InputBusiness/index';

import {
	BusinessCardContainer,
	BusinessCardHead,
	BusinessInfoContainer,
	BusinessCardButton,
} from './styled';

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
					<BusinessInfoContainer>
						<h2>A dogs business</h2>
						<BusinessCardButton onClick={() => setShowForm(!showForm)}>
							{showForm ? '-' : '+'}
						</BusinessCardButton>
					</BusinessInfoContainer>
				</BusinessCardHead>
				<section>
					<section>
						<h4>Inputs</h4>
						{items.map((item, index) => (
							<section key={item.id}>
								<p>
									What : {index} - {item.smallBusiness ? 'small' : ''}
								</p>
								<p>
									What BIG: {index} - {item.bigBusiness ? 'big' : 'no big'}
								</p>
								<p>
									When: {index} - {item.time}
								</p>
								<hr></hr>
							</section>
						))}
					</section>
					<section>
						<h4>Counter</h4>
						<p>1 / small</p>
						<p>1 / big</p>
						<h4>Active </h4>
						<h4>Overall number: {items.length}</h4>
					</section>
				</section>
			</BusinessCardContainer>
			{showForm && <InputBusiness addItems={addItems} />}
		</>
	);
}
