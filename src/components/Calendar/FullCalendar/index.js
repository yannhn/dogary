import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
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
						left: 'dayGridMonth',
						center: 'title',
						right: 'prev,next,today',
					}}
					initialView="dayGridMonth"
					dateClick={function (info) {
						this.changeView('dayGridDay', info.dateStr);
					}}
					events={[
						{
							id: 'a',
							start: '2022-07-04',
							title: 'e1',
							display: 'background',
						},

						{
							id: 'b',
							start: '2022-07-08',
							title: 'e2',
							display: 'background',
						},
						{
							id: 'c',
							start: '2022-07-15',
							title: 'e3',
							display: 'background',
						},
					]}
				/>
			</StyleWrapper>
		</>
	);
}
