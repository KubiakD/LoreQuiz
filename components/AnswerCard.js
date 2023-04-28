import classes from './AnswerCard.module.css';
const AnswerCard = props => {
return (
    <li className={classes.answer}>
        <h2>{props.question}</h2>
        <div>
        <p>Your answer: {props.userAnswer}</p>
        <p>Correct answer: {props.correctAnswer}</p>
        </div>
    </li>
)
};
export default AnswerCard;