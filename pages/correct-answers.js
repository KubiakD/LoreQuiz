import Carousel from '../components/Carousel';
import { LinkBtn } from '../components/Button';
export default function correctAnswers() {
    return (
      <>
        <h1>Correct answers</h1>
        <Carousel />
        <LinkBtn href={'/'}>Play again</LinkBtn>
      </>
    );
 };