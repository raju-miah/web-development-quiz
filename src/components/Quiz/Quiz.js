import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <h2>This is Quiz: {quiz.length}</h2>
            <p>Name: {quiz.name}</p>
        </div>
    );
};

export default Quiz;