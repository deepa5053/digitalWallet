import { configureStore } from '@reduxjs/toolkit';
import ReducerReducer from '../reducer/reducer';


const store = configureStore({
  reducer:
  {
    Reducer: ReducerReducer
  }
});

export default store;