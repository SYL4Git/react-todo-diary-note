import '../css/Header.css';

const Header = () => {
	return (
		<section className='header'>
			<h1 className='banner'>To Do List</h1>
			<div className='links'>
				<button className='todoList'>To do list</button>
				<button className='diary'>Diary</button>
				<button className='notes'>Notes</button>
			</div>
		</section>
	);
};

export default Header;
