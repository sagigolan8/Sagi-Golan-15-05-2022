import { createSlice } from '@reduxjs/toolkit';

const initialState = [];  /* {name, key, currentWeather } */ 

export const counterSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state,action) => { state.push(action.payload) },
    removeFavorite: (state,action) => { 
        return state && state.filter((city) => city.key !== action.payload.key)
    },
  },
},[],(state)=>state);

export const { addFavorite, removeFavorite } = counterSlice.actions

export default counterSlice.reducer;

