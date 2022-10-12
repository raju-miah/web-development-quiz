import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';
const Home = () => {
    const quizTopics = useLoaderData().data;
    console.log(quizTopics)
    return (
        <div>
            <div className='home'>
                <div className='home-text'>
                    <h2>Hi there...</h2>
                    <h3>Welcome to</h3>
                    <h4>Web Development <br /> Quiz</h4>
                    <p>You are find this page, that's mean you doing awesome! <br />Let's get started with your web development IQ <br />Are you ready</p>
                </div>
                <div className='home-img'>
                    <img src="https://i.ibb.co/WfQx4gC/header.jpg" alt="" />
                </div>
            </div>
            <div className='card'>
                {
                    quizTopics.map(quizTopic => <Quiz
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></Quiz>)
                }
            </div>

        </div>
    );
};

export default Home;