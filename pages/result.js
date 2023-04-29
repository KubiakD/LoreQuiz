import { useRouter } from 'next/router';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { quizContext } from '../store/context';
import Scoreboard from '../components/Scoreboard';
import Button, {LinkBtn} from '../components/Button';
import classes from '../styles/resultPage.module.css';
export default function ResultPage () {
  const ctx = useContext(quizContext);
  const score = ctx.score.score;
  const ranking = ctx.ranking;
  const router = useRouter();
  useEffect(()=> {
    ranking.push(ctx.score);
    ctx.setRanking([ ...ranking.sort((obj1,obj2) =>{
      if (obj1.score > obj2.score) {
        return -1
      } else if (obj1.score < obj2.score) {
        return 1 
      } else {
        return 0
      }
    })]);
  },[]);
  const clickHandler = () => {
    return router.push('/');
  };
  return (
    <>
      <Head>
        <title>Result</title>
      </Head>
      <h2>Your result</h2>
      <span className={classes.score}>{`${score}/${
        Object.keys(ctx.userAnswers).length
      }`}</span>
      <h2>Scoreboard</h2>
      <Scoreboard ranking={ctx.ranking} />
      <LinkBtn href={'/correct-answers'}>See correct answers</LinkBtn>
      <Button onClick={clickHandler}>Play again</Button>
    </>
  );
};