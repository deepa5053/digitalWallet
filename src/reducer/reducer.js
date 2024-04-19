import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const storeReducerSlice = createSlice({
    name: "storeReducer",
    initialState,
    reducers: {
        storeReducer: (state, action) => {
            console.log(action.payload); 
            return [...state, action.payload];
        }
    }
});

export const { storeReducer } = storeReducerSlice.actions;

export default storeReducerSlice.reducer;