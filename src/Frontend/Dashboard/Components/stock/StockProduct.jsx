import React, { useState } from 'react';
import './StatusProduct.css'; // Impor file CSS terpisah

function StokProduct() {
    const daftarStokProduk = ['Tersedia', 'Habis'];

    const [stokProduk, setStokProduk] = useState('');

    const handleStokProdukChange = (event) => {
        setStokProduk(event.target.value);
    };

    return (
        <div className='stok-product-container'>
            <select
                id='stokProduk'
                value={stokProduk}
                onChange={handleStokProdukChange}
                className='stok-product-select'
            >
                <option value=''>Stok</option>
                {daftarStokProduk.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default StokProduct;
