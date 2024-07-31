import React, { useEffect, useState } from 'react';

import '../css/Weather.css';

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
		fetch(`/weather?lat=${lat}&lon=${lon}`)
			.then((response) => response.json())
			.then((json) => {
				const temperature = json.main.temp;
				const place = json.name;
				const description = json.weather[0].description;
				const iconUrl = json.iconUrl;

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
