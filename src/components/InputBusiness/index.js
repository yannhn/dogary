import {nanoid} from 'nanoid';
import {useState} from 'react';

import AddButton from '../Forms/Buttons/AddButton';
import CancelButton from '../Forms/Buttons/CancelButton';

import {
	InputBusinessContainer,
	InputBusinessForm,
	InputBusinessHeader,
	InputBusinessCheckboxSection,
	InputBusinessLabel,
	InputBusinessTime,
	InputBusinessDate,
	InputBusinessSection,
	InputBusinessButtonGroup,
	LastSubmitSection,
	LastSubmitHeading,
	LastSubmitText,
} from './styled';

export default function InputBusiness({addNewBusinessItem, cancelForm}) {
	const [smallBusiness, setSmallBusiness] = useState(false);
	const [bigBusiness, setBigBusiness] = useState(false);
	const [time, setTime] = useState('08:00');
	const [enteredDate, setEnteredDate] = useState('');
	const [message, setMessage] = useState('');

	const submitHandler = event => {
		event.preventDefault();
		const newBusinessItem = {
			id: nanoid(),
			smallBusiness: smallBusiness,
			bigBusiness: bigBusiness,
			time: time,
			date: new Date(enteredDate).toDateString(),
		};
		addNewBusinessItem(newBusinessItem);
		setSmallBusiness(false);
		setBigBusiness(false);
		setTime(time);
		setMessage(
			`Your dog ${
				newBusinessItem.smallBusiness && newBusinessItem.bigBusiness
					? `did double business at ${newBusinessItem.time} o'clock on ${newBusinessItem.date}. Your dog will forever be grateful!`
					: newBusinessItem.smallBusiness
					? `did a small business at ${newBusinessItem.time} o'clock on ${newBusinessItem.date}. Your dog will forever be grateful!`
					: newBusinessItem.bigBusiness
					? `did a big business at ${newBusinessItem.time} o'clock on ${newBusinessItem.date}. Your dog will forever be grateful!`
					: `didn't do any business at all at ${newBusinessItem.time} o'clock on ${newBusinessItem.date}. (Sometimes your dog is simply just not in the right mood. You might have to try again later.)`
			}`
		);
	};

	return (
		<>
			<InputBusinessContainer>
				<InputBusinessForm onSubmit={submitHandler}>
					<InputBusinessHeader>Enter business</InputBusinessHeader>
					<InputBusinessCheckboxSection>
						<p>Type of business</p>
						<section>
							<label htmlFor="checkbox-big">small</label>
							<input
								id="checkbox-big"
								type="checkbox"
								checked={smallBusiness}
								onChange={() => setSmallBusiness(!smallBusiness)}
							/>
							<label htmlFor="checkbox-big">big</label>
							<input
								id="checkbox-big"
								type="checkbox"
								checked={bigBusiness}
								onChange={() => setBigBusiness(!bigBusiness)}
							/>
						</section>
					</InputBusinessCheckboxSection>
					<InputBusinessSection>
						<InputBusinessLabel htmlFor="business-time">
							Time of business{' '}
						</InputBusinessLabel>
						<InputBusinessTime
							id="business-time"
							type="time"
							defaultValue="08:00"
							required
							onChange={event => setTime(event.target.value)}
						/>
					</InputBusinessSection>
					<InputBusinessSection>
						<InputBusinessLabel htmlFor="business-date">
							Date of Business
						</InputBusinessLabel>
						<InputBusinessDate
							id="business-date"
							type="date"
							min="2022-07-01"
							max="2022-12-31"
							required
							onChange={event => setEnteredDate(event.target.value)}
						/>
					</InputBusinessSection>
					<InputBusinessButtonGroup>
						<CancelButton buttonText={'Cancel'} type="button" cancelForm={cancelForm} />
						<AddButton buttonText={'Add business'} type="submit" />
					</InputBusinessButtonGroup>
				</InputBusinessForm>
				{message && (
					<LastSubmitSection>
						<LastSubmitHeading>Good job!</LastSubmitHeading>
						<LastSubmitText>{message}</LastSubmitText>
					</LastSubmitSection>
				)}
			</InputBusinessContainer>
		</>
	);
}
