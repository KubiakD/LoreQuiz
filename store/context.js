import { createContext, useEffect, useState } from 'react';

export const quizContext = createContext({
  username: '',
  setUsername: ()=> {},
  userAnswers: {},
  setUserAnswers: () => {},
  score: {},
  ranking: [],
  setRanking: ()=>{}
});

export default function Context({ children }) {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState({ name: 'Mysterious Summoner', score: 0 });
  const [ranking, setRanking] = useState([]);
  useEffect(()=>{
    let j=0;
    for(let i=0; i<Object.keys(userAnswers).length; i++) {
      questions[i].correctAnswer===userAnswers[i]&&j++
    };
    setScore({...score,score: j});
  },[userAnswers]);
  return (
    <quizContext.Provider
      value={{
        questions,
        setQuestions,
        userAnswers,
        setUserAnswers,
        score,
        setScore,
        ranking,
        setRanking
      }}
    >
      {children}
    </quizContext.Provider>
  );
};