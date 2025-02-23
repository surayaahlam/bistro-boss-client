import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='min-h-screen flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-2xl font-bold'>Successfully Payment Done</h1>
            <Link to={"/"}>
            <button className='btn'>Go Home</button></Link>
        </div>
    );
};

export default Success;