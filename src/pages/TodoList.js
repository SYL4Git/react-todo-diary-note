import '../css/TodoList.css';

const TodoList = () => {
	return (
		<section className='todo'>
			<div className='todoInsertContainer'>
				<form action='' className='todo-form'>
					<input
						type='text'
						className='todo-input'
						placeholder='할일을 입력하세요.'
					/>
					<button className='submit'>할일 추가</button>
					<div className='progressBar'>
						<div className='progress'></div>
					</div>
				</form>
			</div>
			<div className='todoContentsContainer'>
				<ul className='todoContents'></ul>
				<div className='congratsMessage'>
					<h2>축하합니다!</h2>
					<p>해야할 일을 모두 완료하셨습니다.</p>
				</div>
			</div>
		</section>
	);
};

export default TodoList;
