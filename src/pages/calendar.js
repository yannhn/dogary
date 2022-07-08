import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function CalendarPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Calendar</title>
				<meta key="description" name="description" content="Calendar" />
			</Helmet>
			<h1>Calendar</h1>
		</Layout>
	);
}
