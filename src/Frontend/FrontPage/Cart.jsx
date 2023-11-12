import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import React, { useState } from 'react';

import Count from './Components/Count/Count';

import FooterComponents from '../Components/FooterComponents';
import './css/cart.css';

const Cart = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className='navbar-cart'>
                <Navbar bg='white' expand='lg' className='mb-4'>
                    <Container>
                        <Link to='/'>
                            <img
                                src='assets/img/logo.png'
                                width='130'
                                alt='logoimage'
                            />
                        </Link>
                        <div className='line-vertikal'></div>
                        <div className='text-cart'>Keranjang Belanja</div>
                        <Link
                            to='/login'
                            className='btn btn-warning text-white fw-bold'
                        >
                            Masuk
                        </Link>
                        {/* <div className='navbar-icons-right'>
                            <Link to='/cart'>
                                <div className='icon-box-cart'>
                                    <FaShoppingCart />
                                </div>
                            </Link>
                            <Link to='/login'>
                                <div className='icon-box-cart'>
                                    <FaUser />
                                </div>
                            </Link>
                        </div> */}
                    </Container>
                </Navbar>
            </div>

            <div className='cart-page w-100 min-vh-100'>
                <div className='kerajang-saya'>
                    <span className='produk'>Produk</span>
                    <span className='harga-satuan'>Harga Satuan</span>
                    <span className='kuantitas'>Kuantitas</span>
                    <span className='total-harga'>Total Harga</span>
                    <span className='aksi'>Aksi</span>
                </div>
                <div className='keranjang-saya-detail'>
                    {/* Menggunakan checkbox sebagai alternatif */}
                    <label className='checkbox-container'>
                        <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className='checkmark'></span>
                    </label>
                    <img src='assets/img/Card/cat.png' alt='' />
                    <h2>Animal Smart Card</h2>
                    <p className='harga-detail'>Rp. 30.000</p>
                    <p className='kuintitas-detail'>
                        {' '}
                        <Count />
                    </p>
                    <p className='total-detail'>Rp. 60.000</p>
                    <p className='hapus-detail'>Hapus</p>
                </div>

                <div className='detail-bayar-kembali'>
                    <Link to='/halaman-sebelumnya'>Kembali</Link>
                </div>

                <div className='detail-bayar'>
                    <p>
                        Total (0) Produk{' '}
                        <span>
                            <Link to='/bayar'>Bayar</Link>
                        </span>
                    </p>
                </div>
            </div>

            <FooterComponents />
        </>
    );
};

export default Cart;
