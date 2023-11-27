import React from 'react';
import InfoHarga from './Components/Add/InfoHarga';
import InfoProduct from './Components/Add/InfoProduct';
import InfoMedia from './Components/Add/InfoMedia';
import Sidebar from '../Components/Sidebar';
import './css/AddProduct.css';
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
