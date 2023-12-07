import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './count.css';

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
            <div className='new-count'>
                <div className='new-line-up'></div>
                <button className='new-min-button' onClick={decrement}>
                    <FaMinus />
                </button>
                <span className='new-counter-value'>{count}</span>
                <button className='new-plus-button' onClick={increment}>
                    <FaPlus />
                </button>
                <div className='new-line-down'></div>
            </div>
        </>
    );
};

export default ProductCounter;
