import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h2 className='blog-header'>Welcome to Blog</h2>
            <div className='blog-ques'>
                <h3>What is the purpose of react router?</h3>
                <p><strong>Answer: </strong>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
            </div>
            <div className='blog-ques'>
                <h3>How does context api works?</h3>
                <p><strong>Answer: </strong>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='blog-ques'>
                <h3>What is useRef?</h3>
                <p><strong>Answer: </strong>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div ref=myRef, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
            <div className='blog-ques'>
                <h3>How does useRef work?</h3>
                <p><strong>Answer: </strong>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
    );
};

export default Blog;