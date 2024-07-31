import React, { useState, useEffect } from 'react';

import '../css/TodoList.css';

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	// 임시 저장된 Todo 불러오기
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
		setTodos(storedTodos);
	}, []);

	// Todo 임시 저장
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos), [todos]);
	});

	// Todo 추가
	const addTodo = (e) => {
		e.preventDefault();
		if (inputValue.trim() === '') return;

		// Todo 추가 후 동작
		const newTodo = { title: inputValue, completed: false }; //새로운 Todo 입력
		setTodos([...todos, newTodo]); // Todo를 object 에 저장
		setInputValue(''); // Todo 입력창 초기화
	};

	// Todo 지우기
	const removeTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	// Todo 완료 설정
	const toggleCompleted = (index) => {
		const newTodos = todos.map((todo, i) =>
			i === index ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(newTodos);
	};

	const completedCount = todos.filter((todo) => todo.completed).length;

	const progress =
		todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

	return (
		<section className='todo'>
			<div className='todoInsertContainer'>
				<form onSubmit={addTodo} className='todo-form'>
					<input
						type='text'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className='todo-input'
						placeholder='할일을 입력하세요.'
					/>
					<button type='submit' className='submit'>
						할일 추가
					</button>
				</form>
				<ul className='todo-list'>
					{todos.map((todo, index) => (
						<li key={index}>
							<input
								type='checkbox'
								checked={todo.completed}
								onChange={() => toggleCompleted(index)}
							/>
							<span>{todo.title}</span>
							<button onClick={() => removeTodo(index)}>X</button>
						</li>
					))}
				</ul>
				<div className='progressBar'>
					<div
						className='progress'
						style={{ width: progress + '%' }}
					></div>
					{todos.length > 0 && todos.every((todo) => todo.completed) && (
						<div className='congrats'>
							축하합니다! 모든 할 일을 완료했습니다.
						</div>
					)}
				</div>
			</div>
			{/* <div className='todoContentsContainer'>
				<ul className='todoContents'></ul>
				<div className='congratsMessage'>
					<h2>축하합니다!</h2>
					<p>해야할 일을 모두 완료하셨습니다.</p>
				</div>
			</div> */}
		</section>
	);
};

export default TodoList;
