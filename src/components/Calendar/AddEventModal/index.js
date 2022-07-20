import {useState} from 'react';

import {
	InputCalendarDateContainer,
	InputCalendarDateForm,
	InputCalendarDateHeader,
	InputCalendarSection,
	InputCalendarLabel,
	InputCalendarDate,
	InputCalendarButtonGroup,
	InputCalendarButton,
} from './styled';

export default function AddEventModal({onClose, onEventAdded}) {
	const [title, setTitle] = useState('');
	const [start, setStart] = useState(new Date());
	const [end, setEnd] = useState(new Date());

	const onSubmit = event => {
		event.preventDefault();
		const newEvent = {
			title,
			start,
			end,
		};
		onEventAdded(newEvent);
		onClose();
	};

	return (
		<>
			<InputCalendarDateContainer onClose={onClose}>
				<InputCalendarDateForm onSubmit={onSubmit}>
					<InputCalendarDateHeader>Enter your next event!</InputCalendarDateHeader>
					<InputCalendarSection>
						<InputCalendarLabel>What is the name of your event?</InputCalendarLabel>
						<InputCalendarDate
							placeholder="Title"
							value={title}
							type="text"
							onChange={event => setTitle(event.target.value)}
						/>
					</InputCalendarSection>
					<InputCalendarSection>
						<InputCalendarLabel>When does the event start?</InputCalendarLabel>
						<InputCalendarDate
							value={start}
							type="date"
							required
							onChange={event => setStart(event.target.value)}
						/>
					</InputCalendarSection>
					<InputCalendarSection>
						<InputCalendarLabel>Till when should the event go?</InputCalendarLabel>
						<InputCalendarDate
							value={end}
							type="date"
							onChange={event => setEnd(event.target.value)}
						/>
					</InputCalendarSection>
					<InputCalendarButtonGroup>
						<InputCalendarButton>Add event</InputCalendarButton>
					</InputCalendarButtonGroup>
				</InputCalendarDateForm>
			</InputCalendarDateContainer>
		</>
	);
}
