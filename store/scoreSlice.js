import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    score: 0,
    maxPoints: 10
};

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setScoreState(state, action) {
            state.score++;
        }
    },
    extraReducers: (builder) => {
        builder.addCase([HYDRATE], (state, action) => {
            return {
                ...state,
                ...action.payload.score
            }
        })
    }
});

export const { setScoreState } = scoreSlice.actions;
export default scoreSlice.reducer;