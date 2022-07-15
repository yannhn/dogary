import Background from './Background';
import Footer from './UI/Footer';

export default function Layout({children}) {
	return (
		<>
			<main>{children}</main>
			<Background />
			<Footer />
		</>
	);
}
