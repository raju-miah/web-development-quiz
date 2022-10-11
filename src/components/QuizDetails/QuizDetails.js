import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;
    // console.log(quizDetails)
    const { questions } = quizDetails;

    return (
        <div>
            <h1>WelCome to Quiz</h1>
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