import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      {...props.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
