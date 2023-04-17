import Question from '../components/Question';
import Answer from '../components/Answer';
import Button from '../components/Button';
import classes from '../styles/questionPage.module.css';
export default function QuestionPage() {
  const DUMMY_DATA = {
    questionId: '515',
    question: "What color are Teemo's eyes?",
    answers: ['Green', 'Blue', 'Brown', "We don't know"],
  };
  return (
    <>
      <Question question={DUMMY_DATA.question} />
      <form className={classes.answers}>
        {DUMMY_DATA.answers.map((answer) => (
          <Answer
            answer={answer}
            name={DUMMY_DATA.questionId}
            key={answer}
          />
        ))}
      </form>
        <section className={classes.buttons}>
        <Button>Next</Button>
        <Button>Previous</Button>
        </section>
    </>
  );
}
