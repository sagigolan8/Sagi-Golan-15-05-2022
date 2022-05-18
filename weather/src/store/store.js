import { configureStore } from '@reduxjs/toolkit';
import citySlice from '../reducers/citySlice';
import countrySlice from '../reducers/countrySlice';
import isDaySlice from '../reducers/isDaySlice';
import tempTypeSlice from '../reducers/tempTypeSlice';
import forecastSlice from '../reducers/forecastSlice';
import favoritesSlice from '../reducers/favoritesSlice';

export const store = configureStore({
  reducer: {
    city: citySlice,
    country: countrySlice,
    forecast: forecastSlice,
    tempType: tempTypeSlice,
    isDay: isDaySlice,
    favorites: favoritesSlice,
  },
});
