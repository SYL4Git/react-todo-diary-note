import { useCallback, useEffect, useRef, useReducer, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DiaryContent from './DiaryContent.js';

const Diary = () => {
	return (
		<section>
			<div className='pgDescription'>
				간단한 일기를 쓸 수 있는 공간입니다.
			</div>
			<DiaryContent />
		</section>
	);
};
export default Diary;
