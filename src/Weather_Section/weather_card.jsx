
// WeatherCard.js
import React, { useState, useEffect } from 'react';
import '../Weather_Section/weather.css';

function WeatherCard({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  // Replace 'YOUR_API_KEY' with the actual API key you obtained from OpenWeatherMap
  const apiKey = '78b57518e4ce4989821102233232311';

  useEffect(() => {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, [city, apiKey]);

  // Check if data has been fetched
  if (!weatherData || !weatherData.current) {
    return <div>Loading...</div>;
  }

  // Extract relevant information
  const { temp_c, humidity, wind_kph, wind_dir, vis_km, pressure_mb } = weatherData.current;

  return (
    <div className='weather-card'>
      <h2>{city} </h2>
      <p>Temperature: {temp_c}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind_kph} km/h, {wind_dir}</p>
      <p>Visibility: {vis_km} km</p>
      <p>Atmospheric Pressure: {pressure_mb} hPa</p>
    </div>
  );
}

export default WeatherCard;
