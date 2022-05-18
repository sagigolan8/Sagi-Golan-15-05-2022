import React from 'react'
import { useSelector } from 'react-redux';
import { unKnownFlag } from '../helpers/assets';
import TempSwitch from './TempSwitch'
export default function CurrentWeather() {
  const city = useSelector((state) => state.city);
  const country = useSelector((state) => state.country);
  const tempType = useSelector((state) => state.tempType);

  return (
        <div>
        {/* Display row of 3 values: current temp, temp switch, country flag, with flex */}
        <div className="temperature-country-wrapper">

            {/* Display column of 2 values: temperature on C°/F° and weather description, with flex */}
            <div className="search-result">
            <p className="search-temp">

            { /*If weather defined check the switch value and show the temperature C°/F° accordingly */ 
                  city.city.currentWeather.temp.celsius
                  &&
                  (
                    `${tempType.tempType === 'C' 
                    ?
                    city.city.currentWeather.temp.celsius 
                    : 
                    city.city.currentWeather.temp.fahrenheit}°`
                  )
            }
            </p>
            <p className="search-weather-description" >
              {city.city && city.city.currentWeather.description}
            </p>
            </div>

            {/* Display column of 2 values: city name and country flag , with flex */}
            <div className="area">
            <p className="city-name">{city.city.name}</p>

            {/* Display country flag and name when hover it */}
            <span className="hover-country" data-hover={country.country ? country.country.name : 'None' }>
                <img
                /*  Just in case, source for unknown flag */
                src={country.country.flag ? country.country.flag : unKnownFlag}  
                width={100}
                alt="Country"
                className="country-flag"
                />
            </span>
            </div>

            {/* Display a Switch for temperature component */}
            <TempSwitch borderStyle={false}/>
                
        </div>
    </div>
  )
}
