import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './QuizQuestion.css';


const QuizQuestion = ({ quizQuestion }) => {
    // console.log(quizQuestion)
    const { id, question, options, correctAnswer } = quizQuestion;
    console.log(id, correctAnswer)

    const handelCorrect = () => {
        const correct = id === correctAnswer;
        if (!correct) {
            alert('correct')
        }
        else {
            alert('not')
        }

    }

    return (
        <div className='quiz'>
            <h1>{question}</h1>
            <button className='eye-btn'>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </button>
            <div className='options'>
                <button onClick={() => handelCorrect()}>{options[0]}</button>
                <button onClick={() => handelCorrect()}>{options[1]}</button>
                <button>{options[2]}</button>
                <button>{options[3]}</button>
            </div>
        </div>
    );
};

export default QuizQuestion;