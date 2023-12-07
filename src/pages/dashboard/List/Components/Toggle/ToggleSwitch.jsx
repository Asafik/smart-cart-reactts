import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
    const [isChecked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!isChecked);
        if (!isChecked) {
            console.log('Toggle switch aktif');
        } else {
            console.log('Toggle switch non-aktif');
        }
    };

    return (
        <label className='list-switch'>
            {' '}
            {/* Mengganti class 'switch' menjadi 'custom-switch' */}
            <input
                type='checkbox'
                checked={isChecked}
                onChange={handleToggle}
            />
            <span className='list-slider'></span>{' '}
            {/* Mengganti class 'slider' menjadi 'custom-slider' */}
        </label>
    );
};

export default ToggleSwitch;
