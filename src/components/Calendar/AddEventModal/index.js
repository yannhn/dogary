import {useState} from 'react';

import {InputCalendarDateContainer, InputCalendarDateForm, InputCalendarDateHeader} from './styled';

export default function AddEventModal({onClose, onEventAdded}) {
	const [title, setTitle] = useState('');
	const [start, setStart] = useState(new Date());
	const [end, setEnd] = useState(new Date());

	const onSubmit = event => {
		event.preventDefault();
		const newEvent = {
			title: title,
			start: start,
			end: end,
		};
		onEventAdded(newEvent);
		onClose();
	};

	return (
		<>
			<InputCalendarDateContainer onClose={onClose}>
				<InputCalendarDateForm onSubmit={onSubmit}>
					<InputCalendarDateHeader>Enter your next event!</InputCalendarDateHeader>
					<label>What is the name of your event?</label>
					<input
						placeholder="Title"
						value={title}
						type="text"
						onChange={event => setTitle(event.target.value)}
					></input>
					<label>When does the event start?</label>
					<input
						value={start}
						type="date"
						required
						onChange={event => setStart(event.target.value)}
					></input>
					<label>Till when should the event go?</label>
					<input
						value={end}
						type="date"
						onChange={event => setEnd(event.target.value)}
					></input>
					<button>Add event</button>
				</InputCalendarDateForm>
			</InputCalendarDateContainer>
		</>
	);
}
