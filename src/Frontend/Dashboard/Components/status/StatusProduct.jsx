import React, { useState } from 'react';
import './StatusProduct.css'; // Impor file CSS terpisah

function StatusProduct() {
    const daftarStatusProduk = ['Publish', 'Draf'];

    const [statusProduk, setStatusProduk] = useState('');

    const handleStatusProdukChange = (event) => {
        setStatusProduk(event.target.value);
    };

    return (
        <div className='status-product-container'>
            <select
                id='statusProduk'
                value={statusProduk}
                onChange={handleStatusProdukChange}
                className='status-product-select'
            >
                <option value=''>Status</option>
                {daftarStatusProduk.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default StatusProduct;
