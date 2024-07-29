import Header from '../component/Header';

const TodoList = () => {
	return (
		<section class='todo'>
			<Header />
			<div class='todoInsertContainer'>
				<form action='' class='todo-form'>
					<input
						type='text'
						class='todo-input'
						placeholder='할일을 입력하세요.'
					/>
					<button class='subtmi'>할일 추가</button>
					<div class='progressBar'>
						<div class='progress'></div>
					</div>
				</form>
			</div>
			<div class='todoContentsContainer'>
				<ul class='todo-contents'></ul>
				<div class='congratsMessage'>
					<h2>축하합니다!</h2>
					<p>해야할 일을 모두 완료하셨습니다.</p>
				</div>
			</div>
		</section>
	);
};

export default TodoList;
