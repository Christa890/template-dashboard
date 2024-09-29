import { configureStore } from '@reduxjs/toolkit';
import templatesReducer from './templatesSlice';

export const store = configureStore({
  reducer: {
    templates: templatesReducer,
  },
});
