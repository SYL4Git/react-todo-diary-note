const Weather = () => {
	return (
		<section className='weather'>
			<div className='weatherContainer'>
				<dl>
					<dt className='tempConainer'>기온:</dt>
					<dd className='temperature'></dd>
					<dt className='placeContainer'>위치:</dt>
					<dd className='place'></dd>
					<dt className='descriptionContainer'>설명:</dt>
					<dd className='description'></dd>
					<dt className='iconContainer'>
						<img className='icon' src='' alt='weatherIcon' />
					</dt>
				</dl>
				<button className='loadWeather'>날씨 불러오기</button>
			</div>
		</section>
	);
};

export default Weather;
