import {Link} from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/calendar">Calendar</Link>
			</nav>
		</footer>
	);
}
