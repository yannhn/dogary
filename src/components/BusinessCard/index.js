import {nanoid} from 'nanoid';
import {useState} from 'react';

import {BusinessCardContainer} from './styled';

export default function BusinessCard() {
	const [items, setItems] = useState([
		{
			id: nanoid(),
			big: true,
			small: false,
			time: '10:00',
		},
		{
			id: nanoid(),
			big: false,
			small: true,
			time: '14:00',
		},
		{
			id: nanoid(),
			big: true,
			small: true,
			time: '17:00',
		},
		{
			id: nanoid(),
			big: true,
			small: true,
			time: '21:00',
		},
	]);

	return (
		<>
			<BusinessCardContainer>
				<article>
					<section>
						<h2>A dogs business</h2>
					</section>
				</article>
				<section>
					<section>
						<h4>Inputs</h4>
						{items.map(item => (
							<section key={item.id}>
								<p>What BIG: {item.big ? 'big' : 'false'}</p>
								<p>What SMALL: {item.small ? 'small' : 'false'}</p>
								<p>When: {item.time}</p>
								<hr></hr>
							</section>
						))}
					</section>
					<section>
						<h4>Counter</h4>
						<p>1 / small</p>
						<p>1 / big</p>
					</section>
				</section>
			</BusinessCardContainer>
			{/* <InputBusiness/> */}
		</>
	);
}
