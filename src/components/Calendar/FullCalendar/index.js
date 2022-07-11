import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {StyleWrapper} from './styled';
import {useState} from 'react';

const handleDateClick = clickInfo => {
	const selectedDate = allMeals.find(meal => meal.id === clickInfo.event.id);
	setCurrentMeal(selectedDate);
};

export default function Calendar() {
	const [currentView, setCurrentView] = useState('dayGridMonth');

	const handleDateClick = () => {
		const current = changeView('dayGridDay');
		setCurrentView(current);
	};

	return (
		<>
			<StyleWrapper>
				<FullCalendar
					plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
					firstDay={1}
					headerToolbar={{
						left: 'dayGridMonth,dayGridDay',
						center: 'title',
						right: 'prev,next,today',
					}}
					initialView="dayGridMonth"
					dateClick={view => {
						alert('Selected Date' + view.dateStr);
						this.changeView('dayGridDay' + view.dateStr);
						view.changeView();
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
