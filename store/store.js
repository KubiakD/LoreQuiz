import { configureStore } from '@reduxjs/toolkit';
import { scoreSlice } from './scoreSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      score: scoreSlice.reducer,
    },
  });

  export const wrapper = createWrapper(makeStore);
