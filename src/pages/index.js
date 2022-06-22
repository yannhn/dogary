import {Helmet} from 'react-helmet';
import AddFoodCard from '../components/AddFoodCard';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<AddFoodCard></AddFoodCard>
		</Layout>
	);
}
