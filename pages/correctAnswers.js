import { useContext } from 'react';
import { quizContext } from '../store/context';
import CorrectAnswer from '../components/CorrectAnswer';

export default function correctAnswers() {
    const ctx = useContext(quizContext);
    return (
        <>
        <h1>See correct answers</h1>
        <ol>
            <CorrectAnswer />
        </ol>
        </>
    )
};