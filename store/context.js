import { createContext, useEffect, useState } from 'react';

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
  username: '',
  setUsername: ()=> {},
  questions: [],
  userAnswers: {},
  setUserAnswers: () => {},
  score: 0,
});

function Context({ children }) {
  const [questions, setQuestions] = useState([DUMMY_DATA]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState('Mysterious Summoner');
  useEffect(()=>{
    let j=0;
    for(let i=0; i<Object.keys(userAnswers).length; i++) {
      questions[0][i].correctAnswer===userAnswers[i]&&j++
    };
    setScore(j);
  },[userAnswers]);
  return (
    <quizContext.Provider
      value={{
        username,
        setUsername,
        questions,
        userAnswers,
        setUserAnswers,
        score,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};
export default Context;