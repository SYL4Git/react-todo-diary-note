import { useState, useEffect } from 'react';

const DiaryContent = () => {
	const [diaryList, setDiaryList] = useState([]);

	useEffect(() => {
		const saved = localStorage.getItem('diaryList');
		if (saved) {
			setDiaryList(JSON.parse(saved));
		}
	}, []);
	return (
		<section className='diaryContent'>
			<div className='diaryContainer'>
				<dl>
					<dt className='diaryDateContainer'>날짜: </dt>
					<dd className='diaryDate'></dd>
					<dt className='diaryTitleContainer'>제목: </dt>
					<dd className='diaryTitle'></dd>
				</dl>
			</div>
		</section>
	);
};

export default DiaryContent;
