import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {StyleWrapper} from './styled';

export default function Calendar() {
	return (
		<>
			<StyleWrapper>
				<FullCalendar
					plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
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
								alert('clicked the new event button!');
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
							title: 'dentist',
							display: 'block',
						},
						{
							id: 'b',
							start: '2022-07-08',
							end: '2022-07-09',
							title: 'veterinarian',
						},
						{
							id: 'c',
							start: '2022-07-15',
							title: 'puppy school',
						},
					]}
				/>
			</StyleWrapper>
		</>
	);
}
