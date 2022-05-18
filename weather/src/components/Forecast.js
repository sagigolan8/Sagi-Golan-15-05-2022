import React from 'react'
import { useSelector } from 'react-redux';
import { iconCdn } from '../helpers/assets';

export default function Forecast() {
  const tempType = useSelector((state) => state.tempType);
  const forecast = useSelector((state) => state.forecast);
  return (
    <>
    {/* Display row of 5 days forecast, with grid - (the second card) */}
        <div style={{display: forecast.forecast.length ? '' : 'none' }} className="forecast">


            {/* Display column of 4 values: date, icon, temp C°/F° , description , with flex */}
            {
            forecast.forecast.length && forecast.forecast.map((day,index) => {
                return <div key={index} className="forecast-day">
                    <div className="forecast-result">
                        <p className="day" >{day.date}</p>
                        <img 
                            className="weather-icon" 
                            src={iconCdn(day.icon)} 
                            alt="weather icon" 
                        />
                        <p className="forecast-temp">
                            {
                           `${tempType.tempType === 'C' ? day.temp.celsius : day.temp.fahrenheit}°`
                            }
                        </p>
                        <p className="forecast-weather-description" >{day.description}</p>
                    </div>   
                </div>   
            })
            }
        </div>
    </>
  )
}






