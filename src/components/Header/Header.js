import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <h1 className='logo'>Web Development Quiz</h1>
            <ul className='nav-links'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/quiz'>
                    <li>Quiz</li>
                </Link>
                <Link to='/blog'>
                    <li>Blog</li>
                </Link>
                <Link to='/statistics'>
                    <li>Statistics</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Header;