import {Helmet} from 'react-helmet';

import BusinessCard from '../components/BusinessCard';
import InputGoalButton from '../components/InputGoalButton';
import InputImageButton from '../components/InputImage/InputImageButton';
import InputInfoButton from '../components/InputName/InputInfoButton';
import Layout from '../components/Layout';
import WalkCard from '../components/WalkCard';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<InputInfoButton />
			<InputImageButton />
			<InputGoalButton />
			<WalkCard />
			<BusinessCard />
		</Layout>
	);
}
