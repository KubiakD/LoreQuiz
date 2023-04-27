import { useContext } from 'react';
import { quizContext } from '../store/context';
import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb';
import Input from '../components/Input';
import Button from '../components/Button';
import classes from '../styles/index.module.css';
export default function Home() {
  const ctx = useContext(quizContext);
  const router = useRouter();
  const submitHandler = event => {
    event.preventDefault();
    const enteredName = event.target[0].value;
    ctx.setScore({...ctx.score, name: enteredName});
    router.push('/questions');
  };
  return (
    <>
      <h1>Welcome to LoreQuiz</h1>
      <form className={classes.form} onSubmit={submitHandler}>
      <Input label='Enter your name to begin' input={{id: 'username'}} />
      <Button>Submit</Button>
      </form>
    </>
  );
}
export const getServerSideProps = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db().collection('questions');
  const questions = await db.aggregate([{ $sample: { size: 10 } }]).toArray();
  client.close();
  return {
    props: {
      questions: JSON.parse(JSON.stringify(questions)),
    },
  };
};