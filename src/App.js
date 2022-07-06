import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './pages';
import CalendarPage from './pages/calendar';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<HomePage />} />
						<Route path="calendar/" element={<CalendarPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
