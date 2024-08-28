import { useState, useEffect } from 'react';

import '../css/notes.css';

const Notes = () => {
	const [notes, setNotes] = useState([]);
	const [inputValue, setInputValue] = useState('');

	// 임시 저장된 Notes 불러오기
	useEffect(() => {
		const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
		setNotes(storedNotes);
	}, []);

	// Notes 임시 저장
	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	// Notes 추가
	const addNotes = (e) => {
		e.preventDefault();
		if (inputValue.trim() === '') return;

		// Notes 추가 후 동작
		const newNotes = { title: inputValue, completed: false }; //새로운 Notes 입력
		setNotes([...notes, newNotes]); // Notes를 object 에 저장
		setInputValue(''); // Notes 입력창 초기화
	};

	// Notes 지우기
	const removeNotes = (index) => {
		const newTodos = notes.filter((_, i) => i !== index);
		setNotes(newTodos);
	};
	return (
		<section className='notes'>
			<div className='notesInsertContainer'>
				<form onSubmit={addNotes} className='notes-form'>
					<input
						type='text'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className='notes-input'
						placeholder='노트를 입력하세요.'
					/>
					<></>
					<button type='submit' className='submit'>
						노트 추가
					</button>
				</form>
				<ul className='notes-list'>
					{notes.map((notes, index) => (
						<li key={index}>
							<span>{notes.title}</span>
							<button onClick={() => removeNotes(index)}>X</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
export default Notes;
