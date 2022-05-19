import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiKey, getLocation, getWeatherByCity } from '../services/requests';
import { updateCity } from '../reducers/citySlice';
import moment from 'moment';
import { errorNotification, infoNotification, successNotification } from '../helpers/alerts';
import CitiesModal from './CitiesModal';
import { MdGpsFixed } from 'react-icons/md';
import { Autocomplete, TextField } from '@mui/material';
import { Box } from '@mui/system';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { debounce, uniqBy } from "lodash";
import { updateForecast } from '../reducers/forecastSlice';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { updateCountry } from '../reducers/countrySlice';
import { flagCdn, getBackground, moonImg, sunImg, unKnownFlag } from '../helpers/assets';
import { addFavorite, removeFavorite } from '../reducers/favoritesSlice';
import { useLocation } from 'react-router-dom';
import '../styles/weather.scss';
import LoadingSpinner from './LoadingSpinner';


export default function Weather() {
  /* States */
  const [isLoading, setIsLoading] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);
  const favorites = useSelector((state) => state.favorites);

  /* Refs */
  const videoRef = useRef();

  const location = useLocation();

  /* Show Tel Aviv by default */
  useEffect(() => {
    handleSearch(location.state?.payload);
  }, [])


  /*Functions */
  const getOptions = debounce(async (value) => {
    const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const query = `?apikey=${apiKey}&q=${value}`;
    try {
      const response = await axios.get(`${baseUrl}/${query}`);
      const newArray = response.data.map((result) => {
        const flag = flagCdn(result.Country.ID.toLowerCase());
        return {
          city: result.LocalizedName,
          flag,
          value: `${result.LocalizedName}, ${result.Country.ID}`
        }
      });
      setFilteredArray(uniqBy(newArray, 'value'));
    } catch (err) {
      console.log(err);
      return null;
    }
  }, 500)


  const handleSelectChange = (e, value) => {
    if (!value) {
      return;
    }
    handleSearch(value.city);
  }

  const addToFavorites = (cityData) => {
    if (!cityData) {
      return;
    }

    const { name, key, currentWeather } = cityData
    dispatch(addFavorite({
      name,
      key,
      currentWeather,
    }));

    dispatch(updateCity({
      name,
      key,
      currentWeather,
      favorite: true
    }));

    successNotification(`${name.charAt(0).toUpperCase()}${name.slice(1)} added to your favorites`);
  }


  const removeFromFavorites = (cityData) => {
    if (!cityData) {
      return;
    }

    const { name, key, currentWeather } = cityData
    dispatch(removeFavorite({ key }));

    dispatch(updateCity({
      name,
      key,
      currentWeather,
      favorite: false
    }));

    infoNotification(`${name.charAt(0).toUpperCase()}${name.slice(1)} deleted from your favorites`);
  }


  const handleSearch = async (city = 'tel aviv') => {
    setIsLoading(true);
    if (!city) {
      return;
    }


    const data = await getWeatherByCity(city);
    if (!data) {
      setIsLoading(false);
      return errorNotification('The request limit has been reached try again later..');
    }
    setIsLoading(false);


    /*Update forecast state*/
    dispatch(updateForecast(data.forecast));


    /*Update country state*/
    const { countryName, countryCode } = data.country;
    const countryFlag = flagCdn(countryCode);
    dispatch(updateCountry({
      name: countryName,
      code: countryCode,
      flag: countryFlag,
    }));


    /*Update city state*/
    dispatch(updateCity({
      name: city.toLowerCase(),
      key: data.city.key,
      currentWeather: data.city.currentWeather,
      favorite: !favorites.length ? false : !!favorites.find(({ key }) => key === data.city.key)
    }));

    backgroundDetective(data.city.currentWeather.weatherIcon, data.city.currentWeather.isDay);

  }

  const askForLocation = () => {
    console.log('Probably won\'t work due to the http protocol... Works fine with localhost and https');
    try {
      /*Ask permission from the user to for location If he agrees return lat and lon */
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
          const data = await getLocation(position.coords.latitude, position.coords.longitude)
          const countryFlag = flagCdn(data.countryCode)
          dispatch(updateCountry({
            name: data.countryName,
            code: data.countryCode,
            flag: countryFlag,
          }));
          handleSearch(data.city);
        })
      }
      else {
        return errorNotification('This feature requires your consent');
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  const backgroundDetective = (iconNum, isDay) => {
    const backgroundVideo = getBackground(iconNum);
    videoRef.current.src = backgroundVideo;
  }


  return (
    <>
      <div className="weather">

        {/* Display column of all search functionality ,with flex - (the first card) */}
        <div className="search">

          {/* Display Star (option to save a city) */}
          <span
            onClick={() =>
              !city.city.favorite ? addToFavorites(city.city) : removeFromFavorites(city.city)}
            className="save-icon-wrapper">
            <StarBorderIcon
              style={{ display: !city.city.favorite ? '' : 'none' }}
              className="save-icon"
            />
            <StarIcon
              style={{ display: city.city.favorite ? '' : 'none', color: '#f2b01e' }}
              className="save-icon"
            />
          </span>


          {/* Display date and headline */}
          <span className="date">{`${moment().format('DD/MM/YYYY')}`}</span>
          <h1 className="headline">Weather App</h1>

          {/* Display a modal of capital cities list button */}
          <CitiesModal />


          {/* Display row of 2 values: input and GPS icon, with flex*/}
          <div className='input-gps-wrapper'>
            <Autocomplete
              // value={values}
              noOptionsText={'Type something...'}
              onChange={handleSelectChange}
              id="country-select-demo"
              options={filteredArray}
              autoHighlight
              getOptionLabel={(option) => option.value || ''}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={option.flag ? option.flag : unKnownFlag}
                    alt="country flag"
                  />
                  {option.city}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  className='autocomplete-input'
                  onChange={(e) => e.target.value && getOptions(e.target.value)}
                  {...params}
                  label="Type some city"
                  onFocus={(e)=> e.target.setAttribute('autocomplete', 'off')}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password',
                    classes: 'white',
                    name: 'password' // disable autocomplete and autofill
                  }}
                />
              )}
            />

            <button onClick={() => askForLocation()} type="button" className="my-location">
              <MdGpsFixed />
            </button>

          </div>


          {/* Display row of 3 values: current temp, temp switch, country flag, with flex */}
          <CurrentWeather />

        </div>
        {/* End of card one */}


        <Forecast />
        {/* End of card two */}


      </div>
      <div>

        {/* Handle the initial background */}
        <img src="./assets/WeatherAppBackground.png" alt="WeatherApp" className="app-background" />

      </div>
      {/* Replace the background video with the background video the fits the weather*/}
      <video ref={videoRef} src="" autoPlay muted loop></video>
      {isLoading && <LoadingSpinner /> }
    </>
  );
}
