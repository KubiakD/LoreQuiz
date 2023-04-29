import Head from 'next/head';
import Carousel from '../components/Carousel';
import { LinkBtn } from '../components/Button';
export default function correctAnswers() {
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