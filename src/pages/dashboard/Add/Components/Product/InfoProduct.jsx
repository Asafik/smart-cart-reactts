import React, { useState } from 'react';
import './InfoProduct.css';

import ToolbarDeskripsi from '../Toolbar/Toolbar';

const InfoProduct = () => {
    const [namaProduk, setNamaProduk] = useState('');
    const [sku, setSku] = useState('');
    const [barcode, setBarcode] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const handleNamaChange = (event) => {
        setNamaProduk(event.target.value);
    };

    return (
        <div className='infoproduct-add'>
            <h3>Informasi Produk</h3>
            <div>
                <label htmlFor='namaProduk'>Nama Produk</label>
                <input
                    type='text'
                    id='namaProduk'
                    placeholder='Masukkan nama produk'
                    value={namaProduk}
                    onChange={handleNamaChange}
                    className='produk-input'
                />
            </div>

            <ToolbarDeskripsi />
        </div>
    );
};

export default InfoProduct;
