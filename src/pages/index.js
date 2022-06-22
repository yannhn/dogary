import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import ShowPicture from '../components/ShowPicture/index.js';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Home</h1>
			<ShowPicture></ShowPicture>
		</Layout>
	);
}
