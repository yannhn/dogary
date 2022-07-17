import {Helmet} from 'react-helmet';

import Background from '../components/Background';
import Layout from '../components/Layout';
import ToDoCard from '../components/ToDos/ToDoCard';
import Header from '../components/UI/Header';

export default function ToDoPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Calendar</title>
				<meta key="description" name="description" content="Calendar" />
			</Helmet>
			<Header heading={'Doggo daily'} />
			<Background />
			<ToDoCard />
		</Layout>
	);
}
