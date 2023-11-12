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
            <div className='custom-count'>
                <div className='custom-line-up'></div>
                <button className='custom-min-button' onClick={decrement}>
                    <FaMinus />
                </button>
                <span className='custom-counter-value'>{count}</span>
                <button className='custom-plus-button' onClick={increment}>
                    <FaPlus />
                </button>
                <div className='custom-line-down'></div>
            </div>
        </>
    );
};

export default ProductCounter;
