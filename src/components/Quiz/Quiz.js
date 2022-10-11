import React from 'react';
import './Quiz.css';

const Quiz = ({ quizTopic }) => {
    const { name, logo, total } = quizTopic;
    return (
        <div className='quiz-card'>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <p>total: {total}</p>
            <button className='start-quiz-btn'>Start Quiz</button>
        </div>
    );
};

export default Quiz;