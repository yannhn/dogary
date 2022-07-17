import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import ToDoList from '../components/ToDos/ToDoList';
import Header from '../components/UI/Header';

export default function ToDoPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Calendar</title>
				<meta key="description" name="description" content="Calendar" />
			</Helmet>
			<Header heading={'Doggo daily'} />
			<ToDoList />
		</Layout>
	);
}
