import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './pages';
import CalendarPage from './pages/calendar';
import ToDoPage from './pages/todo';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<HomePage />} />
						<Route path="calendar" element={<CalendarPage />} />
						<Route path="todo" element={<ToDoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
