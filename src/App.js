import './App.css';

import Header from './component/Header';
import TodoList from './pages/TodoList';

function App() {
	return (
		<div className='App'>
			<Header />
			<TodoList />
		</div>
	);
}

export default App;
