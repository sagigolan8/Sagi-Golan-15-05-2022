import { createSlice } from '@reduxjs/toolkit';

const initialState = { city : {
    name: 'tel aviv',
    key: 215854,
    favorite: false,
    currentWeather: {
        isDay: '',
        temp: {
            celsius: '',
            fahrenheit: ''
        },
        description: '',
        weatherIcon : '',
    }
  } 
};

export const counterSlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        updateCity: (state, action) => { state.city = action.payload },
    },
}, [], (state) => state);

export const { updateCity } = counterSlice.actions;

export default counterSlice.reducer;

