import React from 'react';
import img from '../../header.jpg';
import './Home.css';
const Home = () => {
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
                    <img src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;