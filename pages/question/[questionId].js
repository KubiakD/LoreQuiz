import { useState } from 'react';
import { setScoreState } from '../../store/scoreSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Question from '../../components/Question';
import Answer from '../../components/Answer';
import Button from '../../components/Button';
import classes from '../../styles/questionPage.module.css';
import { wrapper } from '../../store/store';
import { previewData } from 'next/dist/client/components/headers';

export default function QuestionPage(props) {
  // const dispatch = useDispatch();
  // const router = useRouter();
  // const [userAnswer, setUserAnswer] = useState(null);
  // const question = props.question;

  // const answerHandler = (event) => {
  //   const selectedAnswer = event.target.value;
  //   setUserAnswer(selectedAnswer);
  // };

  // const saveAnswer = () => {
  //   userAnswer === question.correctAnswer && dispatch(setScoreState());
  // };
  return (
    <>
      <Question question={question.question} />
      <div className={classes.answers}>
        {question.answers.map((answer) => (
          <Answer
            answer={answer}
            name={question.questionId}
            key={answer}
            checked={userAnswer === answer}
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
};

export function getStaticPaths() {
  return {
    paths: [
      { 
        params: { 
          questionId: 'q1'
         } 
      },
      { 
        params: { 
          questionId: 'q2'
         } 
      }
    ],
    fallback: false, 
  };
};

export const getStaticProps = wrapper.getStaticProps(store => ({preview}) =>
{
  const state = store.getState();
  const currentQuestionIndex = state.questions.currentQuestion;
  const question = state.questions.questions[currentQuestionIndex];


 return {
  props: {
    question,
    currentQuestionIndex
  }
 };
}); 
