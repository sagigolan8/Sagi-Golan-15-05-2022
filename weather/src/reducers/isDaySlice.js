import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    isDay: './assets/HalfMoonAndSun.png',
};

export const counterSlice = createSlice({
    name: 'isDay',
    initialState,
    reducers: {
        updateIsDay: (state, action) => { state.isDay = action.payload },
    },
}, [], (state) => state);

export const { updateIsDay } = counterSlice.actions;

export default counterSlice.reducer;

