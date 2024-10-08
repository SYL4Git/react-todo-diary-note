// react route = https://www.youtube.com/watch?v=SMq1IQRweDc
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import Header from './component/Header.js';
import Weather from './component/Weather.js';
import TodoList from './pages/TodoList.js';
import Diary from './pages/Diary.js';
import Notes from './pages/Notes.js';

import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Weather />
			<Routes>
				<Route path='/' element={<Navigate to='/TodoList' />} />
				<Route path='/todolist' element={<TodoList />} />
				<Route path='/notes' element={<Notes />} />
				<Route path='/diary' element={<Diary />} />
			</Routes>
		</Router>
	);
}

export default App;
