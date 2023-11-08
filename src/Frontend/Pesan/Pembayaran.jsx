import React, { useState } from 'react';
import { Navbar, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FooterComponents from '../Components/FooterComponents';

const Pembayaran = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <>
            <div className='navbar-pesan'>
                <Navbar bg='light' expand='lg' className='mb-4'>
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
            <div className='pembayaran min-vh-100'>
                <div className='pembayaran-wallet'>
                    <img
                        className='shopeepay'
                        src='assets/img/Pembayaran/shopeepay.png'
                        alt='ShopeePay'
                    />
                    <img
                        className='gopay'
                        src='assets/img/Pembayaran/gopay.png'
                        alt='GoPay'
                    />
                    <img
                        className='dana'
                        src='assets/img/Pembayaran/dana.png'
                        alt='Dana'
                    />
                    <img
                        className='banktf'
                        src='assets/img/Pembayaran/banktf.png'
                        alt='Bank Transfer'
                    />
                </div>
                <div className='pembayaran-bank'>
                    {[
                        {
                            className: 'bri',
                            src: 'assets/img/Pembayaran/bri.png',
                            alt: 'BRI',
                        },
                        {
                            className: 'bni',
                            src: 'assets/img/Pembayaran/bni.png',
                            alt: 'BNI',
                        },
                        {
                            className: 'bca',
                            src: 'assets/img/Pembayaran/bca.png',
                            alt: 'BCA',
                        },
                        {
                            className: 'mandiri',
                            src: 'assets/img/Pembayaran/mandiri.png',
                            alt: 'Mandiri',
                        },
                        {
                            className: 'permata',
                            src: 'assets/img/Pembayaran/permata.png',
                            alt: 'Permata',
                        },
                    ].map((item, index) => (
                        <div key={index} className='bank-image'>
                            <img
                                className={item.className}
                                src={item.src}
                                alt={item.alt}
                            />
                            <Form.Check
                                type='radio'
                                className='radio-button'
                                checked={selectedOption === item.className}
                                onChange={() =>
                                    handleRadioChange(item.className)
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
            <FooterComponents />
        </>
    );
};

export default Pembayaran;
