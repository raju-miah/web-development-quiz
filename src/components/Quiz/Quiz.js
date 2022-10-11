import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className='quiz-card'>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <p>total: {total}</p>
            <Link to={`/quiz/${id}`}>
                <button className='start-quiz-btn'>Start Quiz</button>
            </Link>
        </div>
    );
};

export default Quiz;