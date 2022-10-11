import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './QuizQuestion.css';


const QuizQuestion = ({ quizQuestion }) => {
    // console.log(quizQuestion)
    const { id, question, options, correctAnswer } = quizQuestion;
    console.log(id, correctAnswer)


    const notify = () => {
        toast.success(`${correctAnswer}`)
    }
    return (
        <div className='quiz'>
            <h1>{question}</h1>
            <button onClick={notify} className='eye-btn'>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </button>

            <div className='options'>
                <button>{options[0]}</button>
                <button>{options[1]}</button>
                <button>{options[2]}</button>
                <button>{options[3]}</button>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default QuizQuestion;