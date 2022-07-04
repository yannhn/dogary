import {Helmet} from 'react-helmet';

import BusinessCard from '../components/BusinessCard';
import FoodCard from '../components/FoodCard';
import InputInfoButton from '../components/InputInfoButton';
import Layout from '../components/Layout';
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
			<InputInfoButton />

			<WalkCard />
			<FoodCard />
			<BusinessCard />
		</Layout>
	);
}
