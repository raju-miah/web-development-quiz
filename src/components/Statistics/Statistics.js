import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Statistics.css';


const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div>
            <div className='rechart-text'>
                <h1>Welcome to Quiz ReChart</h1>
                <p>Here <strong>id</strong> means Name Related with which id</p>
                <p>Here <strong>total</strong> means how many quiz have this topic of Name</p>
            </div>

            <div className='chart'>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;