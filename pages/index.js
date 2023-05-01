import { useRouter } from 'next/router';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { MongoClient } from 'mongodb';
import { quizContext } from '../store/context';
import Input from '../components/Input';
import Button from '../components/Button';
import classes from '../styles/index.module.css';
export default function Home(props) {
  const ctx = useContext(quizContext);
  useEffect(()=>{
    ctx.setQuestions(props.questions);
  },[]);
  const router = useRouter();
  const submitHandler = event => {
    event.preventDefault();
    const enteredName = event.target[0].value;
    ctx.setScore({...ctx.score, name: enteredName});
    router.push('/questions');
  };
  return (
    <>
      <Head>
        <title>Welcome to LoreQuiz</title>
      </Head>
      <h1>Welcome to LoreQuiz</h1>
      <form className={classes.form} onSubmit={submitHandler} autoComplete='off'>
        <Input label='Enter your name to begin' input={{ id: 'username' }} />
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