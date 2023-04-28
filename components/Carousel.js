import { useContext, useState } from 'react';
import { quizContext } from '../store/context';
import AnswerCard from './AnswerCard';
import Button from './Button';
const Carousel = () => {
  const ctx = useContext(quizContext);
  const [index, setIndex] = useState(0);
  const nextClickHandler = () => {
    setIndex(index=>index+1);
  }
  const previousClickHandler = () => {
    setIndex(index=>index-1);
  }
  return (
    <div>
      <AnswerCard
        question={ctx.questions[index].question}
        userAnswer={ctx.userAnswers[index]}
        correctAnswer={ctx.questions[index].correctAnswer}
      />
      <div>
      <Button
        onClick={previousClickHandler}
        button={
          index === 0 && { disabled: true }
        }
      >
        Previous
      </Button>
      <Button
        onClick={nextClickHandler}
        button={
          index === Object.keys(ctx.userAnswers).length-1 && { disabled: true }
        }
      >
        Next
      </Button>
      </div>
    </div>
  );
};
export default Carousel;
