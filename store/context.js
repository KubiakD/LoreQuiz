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
];

export const quizContext = createContext({
  questions: [],
  currentQuestionIndex: 0,
  score: {
    score: 0,
    maxPoints: 10,
  },
  username: null,
  addOnePoint: () => {},
  nextQuestion: () => {},
  previousQuestion: ()=>{},
});

function Context({ children }) {
  const [questions, setQuestions] = useState([DUMMY_DATA]);
  let [currentQuestionIndex, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  const addPointHandler = () => {
    setScore(score+1);
  };
  const nextQuestionHandler = () => {
    setCurrentQuestion(currentQuestionIndex+1);
  };
  const previousQuestionHandler = () => {
    setCurrentQuestion(currentQuestionIndex-1);
  };
  return (
    <quizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        addOnePoint: addPointHandler,
        nextQuestion: nextQuestionHandler,
        previousQuestion: previousQuestionHandler
      }}
    >
      {children}
    </quizContext.Provider>
  );
};
export default Context;