import {Helmet} from 'react-helmet';

import BusinessCard from '../components/Activities/BusinessCard';
import FoodCard from '../components/Activities/FoodCard';
import WalkCard from '../components/Activities/WalkCard';
import BackgroundHome from '../components/BackgroundHome';
import DogInfoBar from '../components/DogInfo/DogInfoBar';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<BackgroundHome />
			<DogInfoBar />
			<FoodCard />
			<WalkCard />
			<BusinessCard />
		</Layout>
	);
}
