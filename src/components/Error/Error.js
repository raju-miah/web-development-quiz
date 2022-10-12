import React from 'react';
import './Error.css';
const Error = () => {
    return (
        <div className='error'>
            <h1>Opps 404:page not found</h1>
            <h3>Failed to Path</h3>
            <p>TypeError: Failed to find path</p>
            <p>at path (http://webdevelopmentquiz/typerightpath)</p>
            <p>hint's at "typerightpath" type a right path</p>
        </div>
    );
};

export default Error;