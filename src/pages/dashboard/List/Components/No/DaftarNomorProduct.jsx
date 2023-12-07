import React, { useState } from 'react';
import './DaftarNomorProduct.css'; // Import separate CSS file

function DaftarNomorProduct() {
    const daftarNomorProduct = ['1', '2', '3', '4', '5'];

    const [nomorProduct, setNomorProduct] = useState('');

    const handleNomorProductChange = (event) => {
        setNomorProduct(event.target.value);
    };

    return (
        <div className='nomor-product-container'>
            <select
                id='nomorProduct'
                value={nomorProduct}
                onChange={handleNomorProductChange}
                className='nomor-product-select'
            >
                <option value=''>All</option>
                {daftarNomorProduct.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DaftarNomorProduct;
