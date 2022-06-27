import {useState} from 'react';
import {Helmet} from 'react-helmet';

import InputInfoForm from '../components/InputInfoForm';
import Layout from '../components/Layout';
import ShowName from '../components/ShowName/index.js';
import ShowPicture from '../components/ShowPicture/index.js';
import WalkCard from '../components/WalkCard';

export default function HomePage() {
	const [showInputInfo, setShowInputInfo] = useState(false);

	const handleInfo = () => {
		setShowInputInfo(!showInputInfo);
		console.log(showInputInfo);
	};

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
<<<<<<< HEAD
			<section>
				<button onClick={handleInfo}>
					{showInputInfo ? 'hide InputForm' : 'show InputForm'}
				</button>
			</section>
			{showInputInfo && <InputInfoForm />}
=======
			<ShowName />
			<ShowPicture />
			<WalkCard />
>>>>>>> main
		</Layout>
	);
}
