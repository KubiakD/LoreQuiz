import { MongoClient } from 'mongodb';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useContext, useState } from 'react';
import { quizContext } from '../store/context';
import { settingsContextConfig } from '../store/userSettings';
import Input from '../components/Input';
import Button from '../components/Button';
import classes from '../styles/index.module.css';
export default function Home(props) {
  const ctx = useContext(quizContext);
  const settingsCtx = useContext(settingsContextConfig);
  const router = useRouter();
  const quantities = props.quantities;

  const [inputIsEmpty, setInputIsEmpty] = useState(true);

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredName = event.target[0].value;
    const {difLevel, questionsQuantity} = settingsCtx.settings;
    console.log(difLevel);
    console.log(questionsQuantity);
    const response = await fetch(`/api/get-questions?level=${difLevel}&quantity=${questionsQuantity}`);
    const questions = await response.json();
    ctx.setQuestions(questions);
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
  const easyQuestionsQuantity = await db.countDocuments({difficultyLevel: 'easy'});
  const mediumQuestionsQuantity = await db.countDocuments({difficultyLevel: 'medium'});
  const hardQuestionsQuantity = await db.countDocuments({difficultyLevel: 'hard'});
  client.close();
  return {
    props: {
      quantities: {
        easy:easyQuestionsQuantity,
        medium:mediumQuestionsQuantity,
        hard:hardQuestionsQuantity
      }
    },
  };
};