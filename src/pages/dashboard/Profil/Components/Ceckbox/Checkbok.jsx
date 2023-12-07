import React, { useState } from 'react';
import './Checkbox.css';

const Checkbox = () => {
    // Buat state terpisah untuk setiap grup checkbox
    const [baruUntukmuCheckboxStates, setBaruUntukmuCheckboxStates] = useState([
        false,
        false,
        false,
    ]);
    const [aktivitasAkunCheckboxStates, setAktivitasAkunCheckboxStates] =
        useState([false, false, false]);
    const [browserCheckboxStates, setBrowserCheckboxStates] = useState([
        false,
        false,
        false,
    ]);
    const [perangkatCheckboxStates, setPerangkatCheckboxStates] = useState([
        false,
        false,
        false,
    ]);

    const handleCheckboxChange = (index, group) => {
        // Tentukan grup mana yang akan diupdate berdasarkan parameter 'group'
        switch (group) {
            case 'baruUntukmu':
                setBaruUntukmuCheckboxStates((prev) => {
                    const newState = [...prev];
                    newState[index] = !newState[index];
                    return newState;
                });
                break;
            case 'aktivitasAkun':
                setAktivitasAkunCheckboxStates((prev) => {
                    const newState = [...prev];
                    newState[index] = !newState[index];
                    return newState;
                });
                break;
            case 'browser':
                setBrowserCheckboxStates((prev) => {
                    const newState = [...prev];
                    newState[index] = !newState[index];
                    return newState;
                });
                break;
            case 'perangkat':
                setPerangkatCheckboxStates((prev) => {
                    const newState = [...prev];
                    newState[index] = !newState[index];
                    return newState;
                });
                break;
            default:
                break;
        }
    };

    const renderCheckboxes = (checkboxStates, group) => {
        return checkboxStates.map((isChecked, index) => (
            <p key={index}>
                <div className={`custom-checkbox ${group}`}>
                    <input
                        type='checkbox'
                        id={`checkbox-${group}-${index}`}
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(index, group)}
                    />
                    <label
                        htmlFor={`checkbox-${group}-${index}`}
                        className='checkmark'
                    ></label>
                </div>
            </p>
        ));
    };

    return (
        <>
            <div className='checkbox-components'>
                <div className='text-tipe-components'>
                    <p>Baru Untukmu</p>
                </div>
                {renderCheckboxes(baruUntukmuCheckboxStates, 'baruUntukmu')}
            </div>
            <hr />
            <div className='checkbox-components'>
                <div className='text-tipe-components'>
                    <p>Aktivitas Akun</p>
                </div>
                {renderCheckboxes(aktivitasAkunCheckboxStates, 'aktivitasAkun')}
            </div>
            <hr />
            <div className='checkbox-components'>
                <div className='text-tipe-components-3'>
                    <p>Browser baru yang digunakan untuk masuk</p>
                </div>
                {renderCheckboxes(browserCheckboxStates, 'browser')}
            </div>
            <hr />
            <div className='checkbox-components'>
                <div className='text-tipe-components-4'>
                    <p>Perangkat baru tertaut</p>
                </div>
                {renderCheckboxes(perangkatCheckboxStates, 'perangkat')}
            </div>
            <hr />
        </>
    );
};

export default Checkbox;
