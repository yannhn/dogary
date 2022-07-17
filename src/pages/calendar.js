import {Helmet} from 'react-helmet';

import Background from '../components/Background';
import Calendar from '../components/Calendar/FullCalendar';
import Layout from '../components/Layout';
import Header from '../components/UI/Header';

export default function CalendarPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Calendar</title>
				<meta key="description" name="description" content="Calendar" />
			</Helmet>
			<Header heading={'365 Dogs'} />
			<Background />
			<Calendar />
		</Layout>
	);
}
