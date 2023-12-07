import React, { useState } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { BiSolidTrashAlt } from 'react-icons/bi';

import Footer from '../../../../components/Footer/FooterComponents';
import Count from '../Components/Count';
import './Pembayaran.css';

const Pembayaran = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <>
            <div className='navbar-pesan'>
                <Navbar bg='white' expand='lg' className='mb-4'>
                    <Container>
                        <Link to='/'>
                            <img
                                src='assets/img/logo.png'
                                width='130'
                                alt='logoimage'
                            />
                        </Link>

                        <div className='check-container'>
                            <img src='assets/img/icon/check.png' alt='' />
                        </div>

                        <div className='info-text'>Informasi</div>
                        <div className='line'></div>
                        <div className='check-container'>
                            <img src='assets/img/icon/check.png' alt='' />
                        </div>

                        <div className='selesai-text'>Pembayaran</div>
                        <div className='line'></div>
                        <div className='number-container'>
                            <img src='assets/img/icon/circle3.png' alt='' />
                        </div>
                        <div className='selesai-text'>Selesai</div>
                    </Container>
                </Navbar>
            </div>
            <Container>
                <Row className='min-vh-100'>
                    <Col md={8}>
                        <div className='pembayaran'>
                            <h2>Metode Pembayaran</h2>
                            <div className='h2-line'></div>
                            <div className='pembayaran-wallet'>
                                <img
                                    src='assets/img/Pembayaran/shopeepay.png'
                                    alt=''
                                />
                                <img
                                    src='assets/img/Pembayaran/gopay.png'
                                    alt=''
                                />
                                <img
                                    src='assets/img/Pembayaran/dana.png'
                                    alt=''
                                />
                                <img
                                    src='assets/img/Pembayaran/banktf.png'
                                    alt=''
                                />
                            </div>

                            <div className='pembayaran-bank'>
                                <div class='pembayaran-bank-item'>
                                    <input
                                        type='radio'
                                        id='bri'
                                        name='bank'
                                        onChange={() =>
                                            handleRadioChange('bri')
                                        }
                                        checked={selectedOption === 'bri'}
                                    />
                                    <label for='bri'>
                                        <img
                                            src='assets/img/Pembayaran/bri.png'
                                            alt='BRI'
                                        />
                                    </label>
                                </div>
                                <div class='pembayaran-bank-item'>
                                    <input
                                        type='radio'
                                        id='bni'
                                        name='bank'
                                        onChange={() =>
                                            handleRadioChange('bni')
                                        }
                                        checked={selectedOption === 'bni'}
                                    />
                                    <label for='bni'>
                                        <img
                                            src='assets/img/Pembayaran/bni.png'
                                            alt='BNI'
                                        />
                                    </label>
                                </div>
                                <div class='pembayaran-bank-item'>
                                    <input
                                        type='radio'
                                        id='bca'
                                        name='bank'
                                        onChange={() =>
                                            handleRadioChange('bca')
                                        }
                                        checked={selectedOption === 'bca'}
                                    />
                                    <label for='bca'>
                                        <img
                                            src='assets/img/Pembayaran/bca.png'
                                            alt='BCA'
                                        />
                                    </label>
                                </div>
                                <div class='pembayaran-bank-item'>
                                    <input
                                        type='radio'
                                        id='mandiri'
                                        name='bank'
                                        onChange={() =>
                                            handleRadioChange('mandiri')
                                        }
                                        checked={selectedOption === 'mandiri'}
                                    />
                                    <label for='mandiri'>
                                        <img
                                            src='assets/img/Pembayaran/mandiri.png'
                                            alt='Mandiri'
                                        />
                                    </label>
                                </div>
                                <div class='pembayaran-bank-item'>
                                    <input
                                        type='radio'
                                        id='permata'
                                        name='bank'
                                        onChange={() =>
                                            handleRadioChange('permata')
                                        }
                                        checked={selectedOption === 'permata'}
                                    />
                                    <label for='permata'>
                                        <img
                                            src='assets/img/Pembayaran/permata.png'
                                            alt='Permata'
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className='navigation-buttons-pembayaran'>
                                <Link to='/halaman-sebelumnya'>
                                    <button className='button-kembali'>
                                        Kembali
                                    </button>
                                </Link>
                                <Link to={`/petunjuk-${selectedOption}`}>
                                    <button className='button-lanjut'>
                                        Bayar Sekarang
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='pembayaran-total'>
                            <h2>Pemesanan</h2>
                            <div className='h2-line-pembayaran-total'></div>
                            <div className='pembayaran-total-harga'>
                                <img src='assets/img/Card/cat.png' alt='' />
                                <h2>Animal Smart Card</h2>
                                <p>Rp. 30.000</p>
                                <div className='count-pembayaran'>
                                    <Count />
                                </div>

                                <div className='custom-icons-cart-like'>
                                    <div className='custom-to-cart'>
                                        <Link to='/custom-cart'>
                                            <AiFillHeart />
                                        </Link>
                                    </div>

                                    <div className='custom-my-like'>
                                        <Link to='/custom-heart'>
                                            <BiSolidTrashAlt />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='sub-total-harga-container'>
                                {' '}
                                {/* Div baru */}
                                <div className='sub-total-line'></div>{' '}
                                {/* Garis */}
                                <div className='sub-total-harga'>
                                    <p>
                                        Subtotal <span>Rp. 30.000</span>
                                    </p>
                                    <p>
                                        Biaya Pengiriman <span>Rp. 15.000</span>
                                    </p>

                                    <div className='p-line-pembayaran-total'></div>
                                    <p className='total-all-bayar'>
                                        Total <span>Rp. 45.000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Pembayaran;
