import Head from 'next/head';
import Carousel from '../components/Carousel';
import { LinkBtn } from '../components/Button';
import { useContext } from 'react';
import { quizContext } from '../store/context';
export default function correctAnswers() {
  const ctx = useContext(quizContext);
   if (!ctx.questions || ctx.questions.length === 0) {
     return <h1>Something went wrong.</h1>;
   }
    return (
      <>
        <Head>
          <title>Check the correct answers!</title>
        </Head>
        <h1>Correct answers</h1>
        <Carousel />
        <LinkBtn href={'/'}>Play again</LinkBtn>
      </>
    );
 };