import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;