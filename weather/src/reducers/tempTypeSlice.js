import { createSlice } from '@reduxjs/toolkit';

const initialState = { tempType: 'C' };

/* Celsius (C°) or Fahrenheit (F°) */
export const counterSlice = createSlice({
    name: 'tempType',
    initialState,
    reducers: {
        updateTempType: (state, action) => {state.tempType = action.payload },
    },
}, [], (state) => state);

export const { updateTempType } = counterSlice.actions

export default counterSlice.reducer;

