import Question from '../components/Question';
import Answer from '../components/Answer';
import Button from '../components/Button';
import classes from '../styles/questionPage.module.css';
import { useContext, useState } from 'react';
import { quizContext } from '../store/context';

export default function QuestionPage() {
const ctx = useContext(quizContext);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const currentQuestionIndex = ctx.currentQuestionIndex;
const question = ctx.questions[0][currentQuestionIndex];
const changeHandler = event => {
  const answer = event.target.value;
  setSelectedAnswer(answer);
};
const nextQuestionHandler = () => {
  selectedAnswer===question.correctAnswer && ctx.addOnePoint();
  ctx.nextQuestion();
  console.log(ctx.score)
};
const previousQuestionHandler = () => {
  ctx.previousQuestion();
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
        <Button onClick={nextQuestionHandler}>Next</Button>
        </section>
    </>
  );
}
