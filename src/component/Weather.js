import React, { useEffect, useState } from 'react';
import { fetchCoordinates, fetchWeatherData } from '../api/request';

import '../css/Weather.css';

const Weather = ({ cityName }) => {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const coordinates = await fetchCoordinates(cityName);

			if (coordinates) {
				const data = await fetchWeatherData(
					coordinates.lat,
					coordinates.lon
				);
				setWeatherData(data);
			}
		};

		fetchWeather();
	}, [cityName]);

	if (!weatherData) {
		return <div>Loading</div>;
	}

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
					<dd className='description'>{description}</dd>
				</dl>
				<button className='loadWeather' onClick={handleButtonClick}>
					날씨 불러오기
				</button>
			</div>
		</section>
	);
};

export default Weather;
