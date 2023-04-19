import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const DUMMY_DATA = {
  questions: [
    {
      questionId: '515',
      question: "What color are Teemo's eyes?",
      answers: ['Green', 'Blue', 'Brown', "We don't know"],
      correctAnswer: 'Blue',
    },
    {
      questionId: '4822',
      question: "Which of the following characters is Darius' brother?",
      answers: ['Swain', 'Talon', 'Draven', 'Garen'],
      correctAnswer: 'Draven',
    },
    {
      questionId: '900729',
      question: 'Which of the following characters is a Darkin?',
      answers: ['Varus', 'Jax', 'Brand', 'Nocturne'],
      correctAnswer: 'Varus',
    },
  ],
  currentQuestion: 0
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: DUMMY_DATA,
  reducers: {
    nextQuestion(state) {
        state.currentQuestion++;
    }
  },
  extraReducers: (builder) => {
    builder.addCase([HYDRATE], (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});
export const { nextQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
