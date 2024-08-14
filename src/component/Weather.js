import React, { useEffect, useState, useCallback } from 'react';
import { fetchCoordinates, fetchWeatherData } from '../api/request';

import '../css/Weather.css';

const Weather = ({ cityName }) => {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchWeather = useCallback(async () => {
		setLoading(true);
		const coordinates = await fetchCoordinates(cityName);
		if (coordinates) {
			const data = await fetchWeatherData(coordinates.lat, coordinates.lon);
			setWeatherData(data);
		}
		setLoading(false);
	}, [cityName]);

	useEffect(() => {
		fetchWeather();
	}, [fetchWeather]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!weatherData) {
		return <div>Error loading weather data</div>;
	}

	const iconUrl = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;

	return (
		<section className='weather'>
			<div className='weatherContainer'>
				<dl>
					<dt className='placeContainer'>위치:</dt>
					<dd className='place'>{cityName}</dd>
					<dt className='tempConainer'>기온:</dt>
					<dd className='temperature'>{weatherData.current.temp}℃</dd>
					<dt className='iconContainer'>
						<img className='icon' src={iconUrl} alt='weatherIcon' />
					</dt>
					<dt className='descriptionContainer'>설명:</dt>
					<dd className='description'>
						{weatherData.current.weather[0].description}
					</dd>
				</dl>
				<button className='loadWeather' onClick={fetchWeather}>
					날씨 불러오기
				</button>
			</div>
		</section>
	);
};

export default Weather;
