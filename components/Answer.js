import classes from './Answer.module.css';
const Answer = (props) => {
  return (
    <>
      <input
        type='radio'
        id={props.answer}
        value={props.answer}
        name={props.name}
        className={classes.input}
          hidden
      />
      <label htmlFor={props.answer} className={classes.answer}>
        {props.answer}
      </label>
    </>
  );
};

export default Answer;
