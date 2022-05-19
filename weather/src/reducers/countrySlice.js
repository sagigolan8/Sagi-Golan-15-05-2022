import { createSlice } from '@reduxjs/toolkit';
import { unKnownFlag } from '../helpers/assets';

const initialState = { country: {
    name: 'Israel',
    code: 'il',
    flag: unKnownFlag,
} };

export const counterSlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        updateCountry: (state, action) => { state.country = action.payload },
    },
}, [], (state) => state);

export const { updateCountry } = counterSlice.actions;

export default counterSlice.reducer;




