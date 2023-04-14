import Input from '../components/Input'
export default function Home() {
  return (
    <>
      <h1>Welcome to LoreQuiz</h1>
      <Input label='Enter your name to begin' input={{id: 'username'}} />
    </>
  );
}
