import Head from 'next/head';
import { useContext, useState } from 'react';
import { quizContext } from '../store/context';
import { settingsContextConfig } from '../store/userSettings';
import Question from '../components/Question';
import Answer from '../components/Answer';
import ButtonsSection from '../components/Prev&NextButtons';
import classes from '../styles/questionPage.module.css';

export default function QuestionPage() {
  const ctx = useContext(quizContext);
  const settingsCtx = useContext(settingsContextConfig);
  const { questionsQuantity: max } = settingsCtx.settings;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerIsSelected, setAnswerIsSelected] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = ctx.questions[currentQuestionIndex];
  const changeHandler = (event) => {
    const answer = event.target.value;
    setSelectedAnswer(answer);
    setAnswerIsSelected(true);
  };
  if (!ctx.questions || ctx.questions.length === 0) {
    return <h1>Something went wrong.</h1>;
  }
  return (
    <>
      <Head>
        <title>{`Question ${currentQuestionIndex+1}/${max}`}</title>
      </Head>
      <Question question={question.question} />
      <section className={classes.answers}>
        {question.answers.map((answer) => (
          <Answer
            answer={answer}
            name={question._id}
            key={answer}
            checked={selectedAnswer === answer}
            onChange={changeHandler}
          />
        ))}
      </section>
      <ButtonsSection
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        currentQuestionIndex={currentQuestionIndex}
        setAnswerIsSelected={setAnswerIsSelected}
        answerIsSelected={answerIsSelected}
        selectedAnswer={selectedAnswer}
      />
    </>
  );
}
