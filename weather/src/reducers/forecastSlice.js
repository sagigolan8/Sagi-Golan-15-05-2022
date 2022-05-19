import { createSlice } from '@reduxjs/toolkit';

const initialState = { forecast: [] };

export const counterSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    updateForecast: (state,action) => { state.forecast = action.payload },
  },
},[],(state)=>state);

export const { updateForecast } = counterSlice.actions;

export default counterSlice.reducer;

