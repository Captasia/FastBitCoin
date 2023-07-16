import { configureStore } from '@reduxjs/toolkit';
import objectReducer from './reducers.js';

const store = configureStore({
  reducer: {
    object: objectReducer,
  },
});

export default store;