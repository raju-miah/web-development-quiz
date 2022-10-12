import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './QuizDetails.css';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;
    // console.log(quizDetails)
    const { name, questions } = quizDetails;
    // console.log(questions)

    return (
        <div>
            <h1>WelCome to Quiz of</h1>
            <h2 className='quiz-topic-name'>{name}</h2>
            <h3>Start your IQ here</h3>
            {
                questions.map(quizQuestion => <QuizQuestion
                    key={quizQuestion.id}
                    quizQuestion={quizQuestion}
                ></QuizQuestion>)
            }
        </div>
    );
};

export default QuizDetails;