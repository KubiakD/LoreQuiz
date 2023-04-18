import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { scoreSlice } from './scoreSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      [scoreSlice.score]: scoreSlice.reducer,
    },
    devTools: true,
  });

  export const wrapper = createWrapper(makeStore);
