import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { iconCdn } from '../helpers/assets';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Forecast() {
  const tempType = useSelector((state) => state.tempType);
  const forecast = useSelector((state) => state.forecast);

  const initial = {
    y: 50,
    opacity: 0,
  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
        animation.start({
            opacity: 1,
            y: 0,
        });
        return;
    }
}, [inView, animation]);

  return (
    <>
    {/* Display row of 5 days forecast, with grid - (the second card) */}
        <div ref={ref} style={{display: forecast.forecast.length ? '' : 'none' }} className="forecast">


            {/* Display column of 4 values: date, icon, temp C°/F° , description , with flex */}
            {
            forecast.forecast.length && forecast.forecast.map((day,index) => {
                return <motion.div 
                            key={index} 
                            className="forecast-day"
                            initial={initial}
							animate={animation}
							transition={{ duration: 0.5 + index * 0.1 }}
                        >
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
                </motion.div>   
            })
            }
        </div>
    </>
  )
}






