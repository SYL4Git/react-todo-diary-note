import React, { useEffect, useState, useCallback } from 'react';
import { fetchWeatherData } from '../api/request.js';
import openWeatherInstance from '../api/openWeatherInstance.js';

import '../css/Weather.css';

const Weather = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [cityName, setCityName] = useState('');

	const fetchUserLocation = () => {
		return new Promise((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					resolve({
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					});
				}, reject);
			} else {
				reject(new Error('Geolocation not supported'));
			}
		});
	};

	const fetchCityName = useCallback(async (lat, lon) => {
		try {
			const response = await openWeatherInstance.get('/geo/1.0/reverse', {
				params: {
					lat: lat,
					lon: lon,
					limit: 1,
				},
			});
			if (response.data.length === 0) {
				throw new Error('City not found');
			}
			return response.data[0].name;
		} catch (error) {
			console.error('Error fetching city name:', error);
			return null;
		}
	}, []);

	const fetchWeather = useCallback(async () => {
		setLoading(true);
		try {
			const location = await fetchUserLocation();
			const cityName = await fetchCityName(location.lat, location.lon);
			setCityName(cityName);

			if (cityName) {
				const weatherData = await fetchWeatherData(
					location.lat,
					location.lon
				);
				setWeatherData(weatherData);
			}
		} catch (error) {
			console.error('Error fetching weather:', error);
		} finally {
			setLoading(false);
		}
	}, [fetchCityName]);

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
