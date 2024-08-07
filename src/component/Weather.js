import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';

import '../css/Weather.css';

const ComponentWithGeolocation = () => {
	const geolocation = useGeolocation();
};

const Weather = () => {
	const [weather, setWeather] = useState([]);
	const [temperature, setTemperature] = useState('');
	const [place, setPlace] = useState('');
	const [description, setDescription] = useState('');
	const [iconUrl, setIconUrl] = useState('');

	//
	useEffect(() => {
		fetchWeather();
	}, []);

	const fetchWeather = () => {
		const savedWeather = JSON.parse(localStorage.getItem('weather')) || [];
		setWeather(savedWeather);

		if (savedWeather.length > 0) {
			const latestWeather = savedWeather[savedWeather.length - 1];
			setTemperature(`${latestWeather.temperature}℃`);
			setPlace(latestWeather.place);
			setDescription(latestWeather.description);
			setIconUrl(latestWeather.iconUrl);
		}
	};

	const saveWeather = (newWeather) => {
		localStorage.setItem('weather', JSON.stringify(newWeather));
	};

	const getWeather = (lat, lon) => {
		axios
			.get(`/weather?lat=${lat}&lon=${lon}`)
			.then((response) => {
				const data = response.data;
				const temperature = data.main.temp;
				const place = data.name;
				const description = data.weather[0].description;
				const iconUrl = data.iconUrl;

				setTemperature(`${temperature}℃`);
				setPlace(place);
				setDescription(description);
				setIconUrl(iconUrl);

				const newWeather = [
					...weather,
					{ temperature, place, description, iconUrl },
				];
				setWeather(newWeather);
				saveWeather(newWeather);
			})
			.catch((error) => {
				console.error(
					'Error fetching weather data from weather.js:',
					error
				); // error log added
				alert(error);
			});
	};

	const handleLocationSuccess = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		getWeather(latitude, longitude);
	};

	const handleLocationError = () => {
		alert('coordinate not found');
	};

	const handleButtonClick = () => {
		navigator.geolocation.getCurrentPosition(
			handleLocationSuccess,
			handleLocationError
		);
	};

	return (
		<section className='weather'>
			<div className='weatherContainer'>
				<dl>
					<dt className='tempConainer'>기온:</dt>
					<dd className='temperature'>{temperature}</dd>
					<dt className='placeContainer'>위치:</dt>
					<dd className='place'>{place}</dd>
					<dt className='descriptionContainer'>설명:</dt>
					<dd className='description'>{description}</dd>
					<dt className='iconContainer'>
						<img className='icon' src={iconUrl} alt='weatherIcon' />
					</dt>
				</dl>
				<button className='loadWeather' onClick={handleButtonClick}>
					날씨 불러오기
				</button>
			</div>
		</section>
	);
};

export default Weather;
