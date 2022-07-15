import Background from './Background';
import Footer from './UI/Footer';

export default function Layout({children}) {
	return (
		<>
			<main>
				{children}
				<Background />
			</main>
			<Footer />
		</>
	);
}
