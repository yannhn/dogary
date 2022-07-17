import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import ToDoCard from '../components/ToDos/ToDoCard';

export default function ToDoPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Calendar</title>
				<meta key="description" name="description" content="Calendar" />
			</Helmet>
			<h1>ToDo</h1>
			<ToDoCard />
		</Layout>
	);
}
