import classes from './Question.module.css';
const Question = props => {
return (
    <h1 className={classes.question}>{props.question}</h1>
)
};

export default Question;