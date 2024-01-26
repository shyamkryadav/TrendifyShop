import { configureStore } from '@reduxjs/toolkit';
import countReducer  from  './reducerSlice/countSlice';
// import boxReducer  from './reducerSllice/boxSlice';
export default configureStore({
  reducer: {
    count:countReducer,
    // box:boxReducer,
  },
});