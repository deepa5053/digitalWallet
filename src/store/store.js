import { configureStore } from '@reduxjs/toolkit';
import storeReducerReducer from '../reducer/reducer';


const store = configureStore({
  reducer:
  {
    storeReducer: storeReducerReducer
  }
});

export default store;