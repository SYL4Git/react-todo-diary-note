// https://velog.io/@jeongmin1625/Axios-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1

import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const openWeatherInstance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/3.0/onecall?',
	params: {
		appid: API_KEY,
		units: 'metric',
	},
});

export default openWeatherInstance;
