import React from 'react';
import { Link } from 'react-router-dom';

const ButtonWithBottomBorder = ({content,item}) => {
    return (
        <div>
            <Link to={`/order/${item}`}>
            <button className="btn bg-transparent border-0 border-b-2 border-b-white hover:border-b-yellow-500 uppercase">{content}</button>
            </Link>
        </div>
    );
};

export default ButtonWithBottomBorder;