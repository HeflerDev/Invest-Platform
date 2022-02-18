import {configureStore} from '@reduxjs/toolkit';

import apiDataReducer from './apiDataSlice';

export default configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});
