import { useState } from 'react';

const DiaryNew = () => {
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<section className='diaryNew'>
			<input
				type='date'
				value={date}
				onChange={(e) => setDate(e.target.value)}
				className='diaryInput'
			/>
		</section>
	);
};

export default DiaryNew;
