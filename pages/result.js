import classes from '../styles/resultPage.module.css';
import Scoreboard from '../components/Scoreboard';
import Button from '../components/Button';
export default function ResultPage () {
    const DUMMY_DATA = {
        score: 5,
        maxPoints: 10,
        ranking: [{name: 'Heimerdinger', score:9},{name:'Viktor', score:8},{name:'Dr Mundo',score:2}]
    };
    return (
        <>
        <h2>Your result</h2>
        <span className={classes.score}>{`${DUMMY_DATA.score}/${DUMMY_DATA.maxPoints}`}</span>
        <h2>Scoreboard</h2>
        <Scoreboard ranking={DUMMY_DATA.ranking} />
        <Button>Play again</Button>
        </>
    )
};