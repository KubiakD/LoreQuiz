import classes from '../styles/resultPage.module.css';
import Scoreboard from '../components/Scoreboard';
import Button from '../components/Button';
import { useContext } from 'react';
import { quizContext } from '../store/context';
import { useRouter } from 'next/router';
export default function ResultPage (props) {
  const DUMMY_DATA = {
    score: 5,
    maxPoints: 4,
    ranking: [
      { name: 'Heimerdinger', score: 9 },
      { name: 'Viktor', score: 8 },
      { name: 'Dr Mundo', score: 2 },
    ],
  };
  const ctx = useContext(quizContext);
  const score = ctx.score;
  const router = useRouter();
  const clickHandler = () => {
    return router.push('/');
  };
  return (
    <>
      <h2>Your result</h2>
      <span
        className={classes.score}
      >{`${score}/${DUMMY_DATA.maxPoints}`}</span>
      <h2>Scoreboard</h2>
      <Scoreboard ranking={DUMMY_DATA.ranking} />
      <Button onClick={clickHandler}>Play again</Button>
    </>
  );
};