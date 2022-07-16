import {Helmet} from 'react-helmet';

import BusinessCard from '../components/BusinessCard';
import DogInfoBar from '../components/DogInfo/DogInfoBar';
import FoodCard from '../components/FoodCard';
import Layout from '../components/Layout';
import WalkCard from '../components/WalkCard';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<DogInfoBar />
			<FoodCard />
			<WalkCard />
			<BusinessCard />
		</Layout>
	);
}
