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
					customButtons={{
						myCustomButton: {
							text: 'add event',
							click: function () {
								alert('clicked the custom button!');
								}
							},
						},
					}
					footerToolbar={{
						left: 'dayGridMonth,today', right: 'myCustomButton',
					}}
					navLinks={true}
					initialView="dayGridMonth"
					events={[
						{
							id: 'a',
							start: '2022-07-04',
							title: 'dentist',
						},
						{
							id: 'b',
							start: '2022-07-08',
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
