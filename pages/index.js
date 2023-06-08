import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import { quizContext } from '../store/context';
import Input from '../components/Input';
import Button from '../components/Button';
import classes from '../styles/index.module.css';
export default function Home(props) {
  const ctx = useContext(quizContext);
  const router = useRouter();
  const quantities = props.quantities;

  const [inputIsEmpty, setInputIsEmpty] = useState(true);
  useEffect(()=>{
    for (const question of props.questions) {
      question.answers.sort(() => Math.random() - 0.5);
      ctx.setQuestions(props.questions);
    }
  },[]);

  const submitHandler = event => {
    event.preventDefault();
    const enteredName = event.target[0].value;
    ctx.setScore({...ctx.score, name: enteredName});
    router.push('/questions');
  };

  const changeHandler = event => {
    const enteredValue = event.target.value.trim();
    if(enteredValue || enteredValue!=='') {
      setInputIsEmpty(state=>false);
    } else {
      setInputIsEmpty(state=>true)
    };
  };

  const Settings = dynamic(()=>import('../components/Settings'));
  const [openSettings, setOpenSettings] = useState(false);
  const settingsHandler = () => {
    setOpenSettings(curState => true);
  };
  return (
    <>
      <Head>
        <title>Welcome to LoreQuiz</title>
      </Head>
      {openSettings && (
        <Settings setOpenSettings={setOpenSettings} max={quantities}/>
      )}
      <h1>Welcome to LoreQuiz</h1>
      <form
        className={classes.form}
        onSubmit={submitHandler}
        autoComplete='off'
      >
        <Input
          label='Enter your name to begin'
          input={{ id: 'username' }}
          onChange={changeHandler}
        />
        <Button button={inputIsEmpty && { disabled: true }}>Submit</Button>
      </form>
      <Button onClick={settingsHandler}>Settings</Button>
    </>
  );
}
export const getServerSideProps = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db().collection('questions');
  const questions = await db.aggregate([{ $sample: { size: 10 } }]).toArray();
  const easyQuestionsQuantity = await db.countDocuments({difficultyLevel: 'easy'});
  const mediumQuestionsQuantity = await db.countDocuments({difficultyLevel: 'medium'});
  const hardQuestionsQuantity = await db.countDocuments({difficultyLevel: 'hard'});
  client.close();
  return {
    props: {
      questions: JSON.parse(JSON.stringify(questions)),
      quantities: {
        easy:easyQuestionsQuantity,
        medium:mediumQuestionsQuantity,
        hard:hardQuestionsQuantity
      }
    },
  };
};