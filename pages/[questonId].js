'use client';
import Question from '../components/Question';
import Answer from '../components/Answer';
import Button from '../components/Button';
import classes from '../styles/questionPage.module.css';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { quizContext } from '../store/context';

export default function QuestionPage() {
const ctx = useContext(quizContext);
const currentQuestionIndex = ctx.currentQuestionIndex;
const question = ctx.questions[0][currentQuestionIndex];
const router = useRouter();
const nextQuestionHandler = () => {
  // ctx.testFn();
  ctx.nextQuestion();
  console.log(ctx.currentQuestionIndex)
  // console.log(ctx.test)
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
          />
        ))}
      </section>
        <section className={classes.buttons}>
        <Button>Previous</Button>
        <Button onClick={nextQuestionHandler}>Next</Button>
        </section>
    </>
  );
}
