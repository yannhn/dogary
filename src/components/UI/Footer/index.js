import {Link} from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About me</Link>
			</nav>
		</footer>
	);
}
