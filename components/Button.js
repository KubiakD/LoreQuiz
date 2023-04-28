import Link from 'next/link';
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
export const LinkBtn = props => {
  return (
    <Link className={classes.button} href={props.href}>{props.children}</Link>
  )
};
export default Button;