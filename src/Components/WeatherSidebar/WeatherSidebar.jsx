import React from 'react'
import './WeatherSidebar.css'
import { motion } from 'framer-motion'
function WeatherSidebar() {
  return (
    <motion.div className='weatherSidebar__container'>
      <div className='weatherSidebar__top__container'>
        <div className='weatherSidebar__top__left__container'>
          <button className='search__nav__btn '>Search For Places</button>
        </div>
        <div className='weatherSidebar__top__right__container'></div>
      </div>
    </motion.div>
  )
}

export default WeatherSidebar
