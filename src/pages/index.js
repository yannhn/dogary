import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import BusinessCard from '../components/BusinessCard';
import FoodCard from '../components/FoodCard';
import ShowName from '../components/ShowName/index.js';
import ShowPicture from '../components/ShowPicture/index.js';
import WalkCard from '../components/WalkCard';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<ShowName />
			<ShowPicture />
			<WalkCard />
			<FoodCard />
			<BusinessCard />
		</Layout>
	);
}
