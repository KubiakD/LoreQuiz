import { configureStore } from '@reduxjs/toolkit';
import { scoreSlice } from './scoreSlice';
import { questionsSlice } from './questionsSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      score: scoreSlice.reducer,
      questions: questionsSlice.reducer
    },
  });

  export const wrapper = createWrapper(makeStore);
