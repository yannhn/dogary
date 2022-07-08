import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

export default function Calendar() {
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
					info.changeView('dayGridDay');
				}}
			/>
		</>
	);
}
