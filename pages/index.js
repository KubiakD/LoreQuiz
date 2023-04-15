import Input from '../components/Input';
import Button from '../components/Button';
import classes from '../styles/index.module.css';
export default function Home() {
  return (
    <>
      <h1>Welcome to LoreQuiz</h1>
      <form className={classes.form}>
      <Input label='Enter your name to begin' input={{id: 'username'}} />
      <Button>Submit</Button>
      </form>
    </>
  );
}
