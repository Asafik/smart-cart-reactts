import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';

import { FaPlus, FaMinus } from 'react-icons/fa';
import React, { useState } from 'react';

const DetailProduct = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <NavbarComponents />
            <div className='w-100 min-vh-100'>
                <div className='photo-detail-page'>
                    <div className='photo-column text-center'>
                        <img
                            src='assets/img/Card/cat.png'
                            alt='Nama Foto'
                            className='custom-image'
                        />
                    </div>
                    <div className='detail-column'>
                        <h1 className='fw-bold'>Animal Series</h1>
                        <div className='rating'>
                            {/* Icon bintang */}
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span>100 Ulasan</span>
                        </div>
                        <h2 className='fw-bold'>Harga: Rp. 30.000</h2>
                        <p>
                            Terdiri dari 24 kartu hewan unik dimana <br />
                            setiap kartu bisa di scan menggunakan <br />
                            aplikasi untuk memunculkan fitur <br />
                            Augmented Reality.
                        </p>
                        <div>
                            <div>
                                <button
                                    className='counter-button'
                                    onClick={decrement}
                                >
                                    <FaMinus />
                                </button>
                                <span className='counter-value'>{count}</span>
                                <button
                                    className='counter-button'
                                    onClick={increment}
                                >
                                    <FaPlus />
                                </button>
                                <button className='buy-now-button'>
                                    Beli Sekarang
                                </button>
                                <div>
                                    <br />
                                    <p>
                                        Pembelian Dalam Bentuk Pack Bukan Satuan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponents />
        </>
    );
};

export default DetailProduct;
