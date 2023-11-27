import './css/InfoHarga.css';
import React, { useState } from 'react';
import ToggleSwitch from '../Toggle/ToggleSwitch';

const InfoHarga = () => {
    const [harga, setHarga] = useState('');
    const [hargaDiskon, setHargaDiskon] = useState('');

    const handleHargaChange = (event) => {
        // Hanya membiarkan angka yang dimasukkan
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setHarga(newValue);
    };

    const handleHargaDiskonChange = (event) => {
        // Hanya membiarkan angka yang dimasukkan
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setHargaDiskon(newValue);
    };

    return (
        <div className='infoharga-add'>
            <h3>Harga</h3>
            <div>
                <label htmlFor='harga'>Harga</label>
                <input
                    type='text'
                    pattern='[0-9]*'
                    inputMode='numeric'
                    placeholder='Masukkan harga'
                    id='harga'
                    value={harga}
                    onChange={handleHargaChange}
                />
            </div>
            <div>
                <label htmlFor='hargaDiskon'>Harga Diskon</label>
                <input
                    type='text'
                    pattern='[0-9]*'
                    inputMode='numeric'
                    placeholder='Masukkan harga diskon'
                    id='hargaDiskon'
                    value={hargaDiskon}
                    onChange={handleHargaDiskonChange}
                />
            </div>

            <hr />

            <p>
                Tersedia{' '}
                <span className='toggole-ready'>
                    {' '}
                    <ToggleSwitch />
                </span>
            </p>
        </div>
    );
};

export default InfoHarga;
