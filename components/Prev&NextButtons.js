import { useRouter } from 'next/router';
import { useContext } from 'react';
import { quizContext } from '../store/context';
import Button from './Button';
import classes from './Prev&NextButtons.module.css';
const ButtonsSection = props => {
    const router = useRouter();
    const ctx = useContext(quizContext);

    const nextQuestionHandler = () => {
      ctx.userAnswers[props.currentQuestionIndex] = props.selectedAnswer;
      ctx.setUserAnswers({ ...ctx.userAnswers });
      if (props.currentQuestionIndex === ctx.questions.length-1) {
        return router.push('/result');
      }
      props.setCurrentQuestionIndex(props.currentQuestionIndex + 1);
      props.setAnswerIsSelected(false);
    };

    const previousQuestionHandler = () => {
      props.setAnswerIsSelected(false);
      props.setCurrentQuestionIndex(props.currentQuestionIndex - 1);
    };
 

return (
  <section className={classes.buttons}>
    <Button onClick={previousQuestionHandler}>Previous</Button>
    <Button
      onClick={nextQuestionHandler}
      button={!props.answerIsSelected && { disabled: true }}
    >
      Next
    </Button>
  </section>
);
};

export default ButtonsSection;