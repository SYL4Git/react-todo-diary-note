import { useState, useEffect } from 'react';

const DiaryContent = () => {
	const [diaryList, setDiaryList] = useState([]);
	console.log('1 컴포넌트 함수 실행중');

	useEffect(() => {
		console.log('3 useeffect 실행됨');
		const saved = localStorage.getItem('diaryList');
		if (saved) {
			setDiaryList(JSON.parse(saved));
		}
	}, []);
	console.log('2 return 직전');
	return (
		<section className='diaryContent'>
			<div className='diaryContainer'>
				{diaryList.map((diary) => (
					<dl key={diary.date}>
						<dt className='diaryDateContainer'>날짜: </dt>
						<dd className='diaryDate'>{diary.date}</dd>
						<dt className='diaryTitleContainer'>제목: </dt>
						<dd className='diaryTitle'>{diary.title}</dd>
					</dl>
				))}
			</div>
		</section>
	);
};

export default DiaryContent;
