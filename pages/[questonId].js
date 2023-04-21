import Question from '../components/Question';
import Answer from '../components/Answer';
import Button from '../components/Button';
import classes from '../styles/questionPage.module.css';
import { useContext, useState } from 'react';
import { quizContext } from '../store/context';
import { useRouter } from 'next/router';

export default function QuestionPage() {
const ctx = useContext(quizContext);
const router = useRouter();
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [score, setScore] = useState(0);
const question = ctx.questions[0][currentQuestionIndex];

const changeHandler = event => {
  const answer = event.target.value;
  setSelectedAnswer(answer);
};

const nextQuestionHandler = () => {
  if (currentQuestionIndex===3) {
    return router.push('/result')
  };
 selectedAnswer===question.correctAnswer && setScore(()=>score+1);
 setCurrentQuestionIndex(()=>currentQuestionIndex+1);
};

const previousQuestionHandler = () => {
  setCurrentQuestionIndex(currentQuestionIndex-1);

};
  return (
    <>
      <Question question={question.question} />
      <section className={classes.answers}>
        {question.answers.map((answer) => (
          <Answer
            answer={answer}
            name={question.questionId}
            key={answer}
            checked = {selectedAnswer===answer}
            onChange={changeHandler}
          />
        ))}
      </section>
        <section className={classes.buttons}>
        <Button onClick={previousQuestionHandler}>Previous</Button>
        <Button onClick={nextQuestionHandler} button={!selectedAnswer&&{disabled: true}}>Next</Button>
        </section>
    </>
  );
}
