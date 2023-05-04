import React, { useState, useEffect } from 'react'
import './App.css'

//Components
import WeatherSidebar from './Components/WeatherSidebar/WeatherSidebar'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  return (
    <>
      <div className='main'>
        <WeatherSidebar />
        App
      </div>
    </>
  )
}
export default App
