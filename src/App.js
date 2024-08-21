// react route = https://www.youtube.com/watch?v=SMq1IQRweDc
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/Header.js';
import Weather from './component/Weather.js';
import TodoList from './pages/TodoList.js';
// import Diary from './pages/Diary.js';
// import Notes from './pages/Notes.js';

import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Weather />
			<Routes>
				<Route path='/todolist' element={<TodoList />} />
				{/* <Route path='/diary' element={<Diary />} /> */}
				{/* <Route path='/notes' element={<Notes />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
