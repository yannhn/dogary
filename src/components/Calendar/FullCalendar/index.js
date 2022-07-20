import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

import {StyleWrapper} from './styled';
import {useState} from 'react';
import AddEventModal from '../AddEventModal/index';

export default function Calendar() {
	const [modalOpen, setModalOpen] = useState(false);

	const onEventAdded = event => {
		addEvent(event);
	};

	return (
		<>
			<StyleWrapper>
				<FullCalendar
					plugins={[dayGridPlugin, listPlugin, interactionPlugin, timeGridPlugin]}
					firstDay={1}
					headerToolbar={{
						left: 'prev',
						center: 'title',
						right: 'next',
					}}
					footerToolbar={{left: 'dayGridMonth,today', right: 'testButton'}}
					customButtons={{
						testButton: {
							text: 'add new event',
							click: function () {
								setModalOpen(!modalOpen);
							},
						},
					}}
					navLinks={true}
					editable={true}
					initialView="dayGridMonth"
					events={[
						{
							id: 'a',
							start: '2022-07-04',
							end: '2022-07-07',
							title: 'dog vacation',
						},
						{
							id: 'b',
							start: '2022-07-08',
							title: 'veterinarian',
						},
						{
							id: 'c',
							start: '2022-07-15T11:00:00',
							end: '2022-07-15T12:00:00',
							title: 'puppy school',
						},
						{
							id: 'd',
							start: '2022-07-15',
							title: 'buy snacks',
						},
					]}
				/>
			</StyleWrapper>
			<section>
				{modalOpen && (
					<AddEventModal
						isOpen={modalOpen}
						onClose={() => setModalOpen(false)}
						onEventAdded={event => onEventAdded(event)}
					></AddEventModal>
				)}
			</section>
		</>
	);
}
