// react route = https://www.youtube.com/watch?v=SMq1IQRweDc
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import Header from './component/Header';
import Weather from './component/Weather';
import TodoList from './pages/TodoList';
import Diary from './pages/Diary';
import Notes from './pages/Notes';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Router>
				<Header />
				<Weather />
				<Routes>
					<Route path='/todolist' element={<TodoList />} />
					<Route path='/diary' element={<Diary />} />
					<Route path='/notes' element={<Notes />} />
				</Routes>
			</Router>
		</BrowserRouter>
	);
}

export default App;
