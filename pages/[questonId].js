import { useState } from 'react';
import { setScoreState } from '../store/scoreSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Question from '../components/Question';
import Answer from '../components/Answer';
import Button from '../components/Button';
import classes from '../styles/questionPage.module.css';
export default function QuestionPage() {
  const DUMMY_DATA = {
    questionId: '515',
    question: "What color are Teemo's eyes?",
    answers: ['Green', 'Blue', 'Brown', "We don't know"],
    correctAnswer: 'Blue'
  };
  const dispatch = useDispatch();
  const router=useRouter()
  const [userAnswer, setUserAnswer] = useState(null);

  const answerHandler = event => {
    const selectedAnswer = event.target.value;
    setUserAnswer(selectedAnswer);
  };

  const saveAnswer = () => {
    userAnswer===DUMMY_DATA.correctAnswer&&dispatch(setScoreState());
    router.push('/next-page');
  };
  return (
    <>
      <Question question={DUMMY_DATA.question} />
      <div className={classes.answers}>
        {DUMMY_DATA.answers.map((answer) => (
          <Answer
            answer={answer}
            name={DUMMY_DATA.questionId}
            key={answer}
            checked={userAnswer===answer}
            onChange={answerHandler}
          />
        ))}
      </div>
        <section className={classes.buttons}>
        <Button>Previous</Button>
        <Button onClick={saveAnswer}>Next</Button>
        </section>
    </>
  );
}
