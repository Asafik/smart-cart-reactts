import React from 'react';

import InfoHarga from '../Components/Harga/InfoHarga';
import InfoProduct from '../Components/Product/InfoProduct';
import InfoMedia from '../Components/Media/InfoMedia';
import Sidebar from '../../Components/Sidebar/Sidebar';

import './AddProduct.css';
const AddProduct = () => {
    return (
        <>
            <div className='addproduct'>
                <Sidebar />
                <h5>Tambahkan Produk</h5>
                <div className='add-button'>
                    <button className='buang-button'>Buang</button>
                    <button className='simpan-draft-button'>
                        Simpan Darft
                    </button>
                    <button className='publis-product'>Publish Produk</button>
                </div>

                <div className='addproduct-harga'>
                    <InfoProduct />
                    <InfoHarga />
                </div>
                <InfoMedia />
            </div>
        </>
    );
};

export default AddProduct;
