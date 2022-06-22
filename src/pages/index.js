import {Helmet} from 'react-helmet';

import FoodCard from '../components/FoodCard';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<FoodCard></FoodCard>
		</Layout>
	);
}
