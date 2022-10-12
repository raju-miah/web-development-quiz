import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './QuizQuestion.css';


const QuizQuestion = ({ quizQuestion }) => {
    // console.log(quizQuestion)
    const { question, options, correctAnswer } = quizQuestion;
    // console.log(id, correctAnswer)

    const handelCorrectAndWrong = (option) => {
        // console.log(option)
        if (option === correctAnswer) {
            toast.success('CorrectAnswer')

        }
        else {
            toast.error('WrongAnswer')
        }
        // console.log(correctAnswer)
    }


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
                <button onClick={() => handelCorrectAndWrong(options[0])}>{options[0]}</button>
                <button onClick={() => handelCorrectAndWrong(options[1])}>{options[1]}</button>
                <button onClick={() => handelCorrectAndWrong(options[2])}>{options[2]}</button>
                <button onClick={() => handelCorrectAndWrong(options[3])}>{options[3]}</button>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default QuizQuestion;