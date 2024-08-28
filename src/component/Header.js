import { useNavigate, useLocation } from 'react-router-dom';

import '../css/header.css';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	let bannerText = '';
	let pageDesc = '';
	switch (location.pathname) {
		case '/todolist':
			bannerText = 'To Do List';
			pageDesc =
				'할 일을 추가하고, 수정하고, 삭제하고, 달성 여부를 표시하고, 전체 달성 여부를 확인할 수 있는 페이지입니다.';
			break;
		case '/notes':
			bannerText = 'Notes';
			pageDesc =
				'간단하게 기억해놓아야 하는 요소들을 적어놓고, 수정하거나 삭제할 수 있는 페이지입니다.';
			break;
		case '/diary':
			bannerText = 'Diary';
			pageDesc = '일기를 작성하고, 수정하고, 삭제할 수 있는 페이지입니다.';
			break;
		default:
			bannerText = 'To Do List';
	}

	return (
		<section className='header'>
			<h1 className='banner'>{bannerText}</h1>
			<div className='pageDesc'>{pageDesc}</div>
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
