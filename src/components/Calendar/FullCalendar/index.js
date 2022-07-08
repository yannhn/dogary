import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {nanoid} from 'nanoid';

export default function Calendar() {
	const INITIAL_EVENTS = [
		{
			id: 'a',
			title: 'go to veterinarian',
			start: '2022-07-15',
		},
		{
			id: 'b',
			title: 'puppy school',
			start: '2022-07-08',
		},
		{
			id: 'c',
			title: 'meeting',
			start: '2022-07-04',
		},
	];

	return (
		<>
			<FullCalendar
				plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
				headerToolbar={{
					left: 'dayGridMonth,dayGridDay',
					center: 'title',
					right: 'prev,next today',
				}}
				initialView="dayGridMonth"
				dateClick={function (info) {
					// alert('Current view' + info.view.type);
					// info.dayEl.style.backgroundColor = 'red';
					// info.changeView('dayGridDay');
					this.changeView('dayGridDay', info.dateStr);
				}}
				initialEvents={INITIAL_EVENTS}
				// dateClick={e => dateClickHandler(e)}
			/>
		</>
	);
}
