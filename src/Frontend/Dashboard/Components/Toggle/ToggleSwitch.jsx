import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
    const [isChecked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!isChecked);
        // Tambahkan kode yang ingin dijalankan ketika toggle switch diubah
        if (!isChecked) {
            console.log('Toggle switch aktif');
        } else {
            console.log('Toggle switch non-aktif');
        }
    };

    return (
        <label className='switch'>
            <input
                type='checkbox'
                checked={isChecked}
                onChange={handleToggle}
            />
            <span className='slider'></span>
        </label>
    );
};

export default ToggleSwitch;
