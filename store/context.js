import { createContext, useState } from 'react';

const DUMMY_DATA = [
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
  {
    questionId: '40',
    question: 'Which of the following characters is a Katarinas\' sister?',
    answers: ['Sivir', 'Le Blanc', 'Samira', 'Cassiopeia'],
    correctAnswer: 'Cassiopeia',
  },
];

export const quizContext = createContext({
  questions: [],
  userAnswers: {},
  setUserAnswers: () => {}
});

function Context({ children }) {
  const [questions, setQuestions] = useState([DUMMY_DATA]);
  const [userAnswers, setUserAnswers] = useState({});
  return (
    <quizContext.Provider
      value={{
        questions,
        userAnswers,
        setUserAnswers
      }}
    >
      {children}
    </quizContext.Provider>
  );
};
export default Context;