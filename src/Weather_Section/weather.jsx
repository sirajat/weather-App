import React from 'react'
import WeatherCard from './weather_card'
import '../Weather_Section/weather.css'


function Weather() {
  return (
    <div className='weather'>
      <WeatherCard city="London"/>
      <WeatherCard city="New York"/>
      <WeatherCard city="Tokyo"/>
      <WeatherCard city="New Delhi"/>
      <WeatherCard city="Mumbai"/>
      <WeatherCard city="sharjah"/>
      <WeatherCard city="Los Angels"/>
      <WeatherCard/>

    </div>
  )
}

export default Weather
