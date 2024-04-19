import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ReducerSlice = createSlice({
    name: "Reducer",
    initialState,
    reducers: {
        Reducer: (state, action) => {
            console.log(action.payload); 
            return [...state, action.payload];
        }
    }
});

export const { Reducer } = ReducerSlice.actions;

export default ReducerSlice.reducer;