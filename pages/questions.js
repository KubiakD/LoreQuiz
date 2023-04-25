import Question from '../components/Question';
import Answer from '../components/Answer';
import ButtonsSection from '../components/Prev&NextButtons';
import classes from '../styles/questionPage.module.css';
import { useContext, useState } from 'react';
import { quizContext, questionsContext } from '../store/context';

export default function QuestionPage() {
  const ctx = useContext(quizContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerIsSelected, setAnswerIsSelected] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = useContext(questionsContext).questions[currentQuestionIndex];

  const changeHandler = (event) => {
    const answer = event.target.value;
    setSelectedAnswer(answer);
    setAnswerIsSelected(true);
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
