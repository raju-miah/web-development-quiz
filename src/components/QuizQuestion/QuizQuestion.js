import React from 'react';
import './QuizQuestion.css';
const QuizQuestion = ({ quizQuestion }) => {
    const { question, options } = quizQuestion;
    return (
        <div className='quiz'>
            <h1>{question}</h1>
            <div className='options'>
                {/* <p>{options[0]}</p>
                <p>{options[1]}</p>
                <p>{options[2]}</p>
                <p>{options[3]}</p> */}
                <button>{options[0]}</button>
                <button>{options[1]}</button>
                <button>{options[2]}</button>
                <button>{options[3]}</button>
            </div>
        </div>
    );
};

export default QuizQuestion;