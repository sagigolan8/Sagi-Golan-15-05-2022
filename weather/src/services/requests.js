import axios from 'axios';
import moment from 'moment';


export const apiKey = 'XspsWnNqGS0hy7k5LNHiCuXwiUGGzkkm';
export const apiKey1 = '1NYwS77s9H5OYZZG0oCYhkTYDxZD9DfA';
export const apiKey2 = 'bA8sF0JQ9Tc1sgr1fk5sKHYv26Y0G4Hq'; 
export const apiKey3 = 'g5SsfowpZKoZWO8WzAst70bAngwgjtaV'; 
export const apiKey4 = 'SpbAx7eGUVjkAt652fu7AhbNwVKGo8Gd'; 
export const apiKey5 = 'aNKPgAh2mO36doBqRtD5DXgpspe8X6w6'; 
export const apiKey6 = '6hsVPdnHHmTdHT4vwGIuZAZhRA2MUHaD'; 
export const apiKey7 = 'XspsWnNqGS0hy7k5LNHiCuXwiUGGzkkm'; 

const getForecast = async (cityKey) =>{
  const baseUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}`
  const query = `?apikey=${apiKey}`
  try {
    const { data } = await axios.get(`${baseUrl}${query}`)
    const forecastArray = data.DailyForecasts.map((day) => {
      const maxTemp = day.Temperature.Maximum.Value
      const temp = {
        fahrenheit : Math.floor(maxTemp) ,
        celsius: Math.floor(((maxTemp) - 32) / 1.8) ,
      } 
      const description = day.Day.IconPhrase.split(' w/')[0]
      const icon = day.Day.Icon
      const date = moment(day.Date).format('dddd');       
      return {
        date,
        temp,
        description,
        icon
      }
    })
    return forecastArray
  } catch (err) {
    console.log(err);
    return null
  }
}



const getCityKeyAndCountry = async (cityAndCountry) =>{
  const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${apiKey}&q=${cityAndCountry}`
  try {
    const response = await axios.get(`${baseUrl}/${query}`)
    const data = response.data[0]
    return {
      cityKey: data.Key,
      countryName: data.Country.EnglishName,
      countryCode: data.Country.ID
    }
  } catch (err) {
    console.log(err);
    return null
  }
}


export const getWeatherByCity = async (cityAndCountry) => {
  try {
    const cityDetails = await getCityKeyAndCountry(cityAndCountry)
    const { cityKey, countryCode, countryName } = cityDetails
    const forecast = await getForecast(cityKey)
    const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1'
    const query = `${cityKey}?apikey=${apiKey}`
    const response = await axios.get(`${baseUrl}/${query}`)
    const data = response.data[0]
    return {
      city:{
        key: cityKey,
        currentWeather: {
          isDay: data.IsDayTime,
          temp: {
            celsius: Math.floor(data.Temperature.Metric.Value),
            fahrenheit: Math.floor(data.Temperature.Imperial.Value)
          },
          description: data.WeatherText,
          weatherIcon :data.WeatherIcon,
        },
      },
      forecast, 
      country: {
        countryCode : countryCode.toLowerCase(),
        countryName
      }
    }
  } catch (err) {
    console.log(err);
    return null
  }
}


export const getLocation = async (lat,lon) =>{
  const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search'
  const query = `?apikey=${apiKey}&q=${lat},${lon}`
  try {
    const { data } = await axios.get(`${baseUrl}/${query}`)
    return { 
      city: data.EnglishName,
      countryName: data.Country.EnglishName,
      countryCode: data.Country.ID.toLowerCase(),
     } 
  } catch (err) {
    console.log(err);
    return null
  }
}





  