import Footer from './UI/Footer';

export default function Layout({children}) {
	return (
		<>
			<main>{children}</main>
			<Footer />
		</>
	);
}
