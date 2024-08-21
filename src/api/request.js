import openWeatherInstance from './openWeatherInstance.js';

export const fetchCoordinates = async (cityName) => {
	try {
		console.log('Fetching coordinates for:', cityName);
		const response = await openWeatherInstance.get('/geo/1.0/direct', {
			params: {
				q: cityName,
				limit: 1,
			},
		});

		if (response.data.length === 0) {
			throw new Error('City not found');
		}

		const { lat, lon } = response.data[0];
		return { lat, lon };
	} catch (error) {
		console.error('Error fetching coordinates:', error);
		return null;
	}
};

export const fetchWeatherData = async (lat, lon) => {
	try {
		const response = await openWeatherInstance.get('/data/3.0/onecall', {
			params: {
				lat: lat,
				lon: lon,
				exclude: 'minutely, hourly',
			},
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching weather data:', error);
		return null;
	}
};
