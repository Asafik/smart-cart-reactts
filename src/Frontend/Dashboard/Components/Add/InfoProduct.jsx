import React, { useState } from 'react';
import './css/InfoProduct.css';

import ToolbarDeskripsi from '../Toolbar/Toolbar';

const InfoProduct = () => {
    const [namaProduk, setNamaProduk] = useState('');
    const [sku, setSku] = useState('');
    const [barcode, setBarcode] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const handleNamaChange = (event) => {
        setNamaProduk(event.target.value);
    };

    const handleSkuChange = (event) => {
        // Hanya membiarkan angka yang dimasukkan
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setSku(newValue);
    };

    const handleBarcodeChange = (event) => {
        // Hanya membiarkan angka yang dimasukkan
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setBarcode(newValue);
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

            <div className='sku-barcode'>
                <div>
                    <label htmlFor='sku'>SKU</label>
                    <input
                        type='text'
                        id='sku'
                        placeholder='Masukkan SKU (angka)'
                        value={sku}
                        onChange={handleSkuChange}
                        className='sku'
                    />
                </div>
                <div className='barcode'>
                    <label htmlFor='barcode'>Barcode</label>
                    <input
                        type='text'
                        id='barcode'
                        placeholder='Masukkan Barcode (angka)'
                        value={barcode}
                        onChange={handleBarcodeChange}
                        className='barcode-input'
                    />
                </div>
            </div>

            <ToolbarDeskripsi />
        </div>
    );
};

export default InfoProduct;
