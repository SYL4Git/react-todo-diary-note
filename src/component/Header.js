import { useNavigate } from 'react-router-dom';

import '../css/header.css';

const Header = () => {
	const navigate = useNavigate();

	return (
		<section className='header'>
			<div className='links'>
				<button className='todoList' onClick={() => navigate('/todolist')}>
					To Do list
				</button>
				<button className='diary' onClick={() => navigate('/diary')}>
					Diary
				</button>
				<button className='notes' onClick={() => navigate('/notes')}>
					Notes
				</button>
			</div>
		</section>
	);
};

export default Header;
