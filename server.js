require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async (req, res) => {
	const lat = req.query.lat;
	const lon = req.query.lon;
	const apiKey = process.env.API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`;

	try {
		const fetch = await import('node-fetch');
		const response = await fetch.default(url);
		const data = await response.json();

		// openweather API 의 아이콘 URL 생성
		const iconCode = data.weather[0].icon;
		const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

		// 응답 데이터에 아이콘 url 추가
		data.iconUrl = iconUrl;
		res.json(data);
	} catch (error) {
		console.error('Error fetching weather data from server.js:', error); // error log added
		res.status(500).send(error);
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
