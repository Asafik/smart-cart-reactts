import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './css/count.css';

const ProductCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className='count'>
                <div className='line-up'></div>
                <button className='min-button' onClick={decrement}>
                    <FaMinus />
                </button>
                <span className='counter-value'>{count}</span>
                <button className='plus-button' onClick={increment}>
                    <FaPlus />
                </button>
                <div className='line-down'></div>
            </div>
        </>
    );
};

export default ProductCounter;
