const Weather = () => {
	return (
		<section class='weather'>
			<div class='weatherContainer'>
				<dl>
					<dt class='tempConainer'>기온:</dt>
					<dd class='temperature'></dd>
					<dt class='placeContainer'>위치:</dt>
					<dd class='place'></dd>
					<dt class='descriptionContainer'>설명:</dt>
					<dd class='description'></dd>
					<dt class='iconContainer'>
						<img class='icon' src='' alt='weatherIcon' />
					</dt>
				</dl>
				<button class='loadWeather'>날씨 불러오기</button>
			</div>
		</section>
	);
};

export default Weather;
