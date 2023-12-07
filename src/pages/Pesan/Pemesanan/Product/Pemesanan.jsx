import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DaftarPropinsi from '../Components/Daerah/DaftarPropinsi';
import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiSolidTrashAlt } from 'react-icons/bi';

import Footer from '../../../../components/Footer/FooterComponents';
import Count from '../Components/Count/Count';
import './Pemesanan.css';

const Pemesanan = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nama, setNama] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [kota, setKota] = useState('');
    const [alamat, setAlamat] = useState('');
    const [kodePos, setKodePos] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleNamaChange = (e) => {
        setNama(e.target.value);
    };

    const handleProvinsiChange = (e) => {
        setProvinsi(e.target.value);
    };

    const handleKotaChange = (e) => {
        setKota(e.target.value);
    };

    const handleAlamatChange = (e) => {
        setAlamat(e.target.value);
    };

    const handleKodePosChange = (e) => {
        setKodePos(e.target.value);
    };

    const daftarPropinsi = DaftarPropinsi();

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
                        <div className='number-container'>
                            <img src='assets/img/icon/circle2.png' alt='' />
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

            <Container className='pemesanan'>
                <Row className='min-vh-100'>
                    <Col md={8}>
                        <div className='pemesanan-detail'>
                            <h2>Informasi Kontak</h2>
                            <div className='h2-line'></div>
                            <div className='email-telepon'>
                                <input
                                    type='email'
                                    id='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder='Email'
                                />
                                <input
                                    type='text'
                                    id='phone'
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder='Nomor Telepon'
                                />
                            </div>
                            <div className='h2-line'></div>
                            <h2>Informasi Pengiriman</h2>
                            <div className='h2-line'></div>
                            <div className='inputan-nama'>
                                <input
                                    type='text'
                                    id='nama'
                                    value={nama}
                                    onChange={handleNamaChange}
                                    placeholder='Nama'
                                />
                            </div>
                            <div className='provinsi-kota'>
                                <select
                                    id='provinsi'
                                    value={provinsi}
                                    onChange={handleProvinsiChange}
                                >
                                    <option value=''>Pilih Provinsi</option>
                                    {daftarPropinsi.map((propinsi, index) => (
                                        <option key={index} value={propinsi}>
                                            {propinsi}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    type='text'
                                    id='kota'
                                    value={kota}
                                    onChange={handleKotaChange}
                                    placeholder='Kota'
                                />
                            </div>

                            <div className='alamat-kodepos'>
                                <input
                                    type='text'
                                    id='alamat'
                                    value={alamat}
                                    onChange={handleAlamatChange}
                                    placeholder='Alamat'
                                />
                                <input
                                    type='text'
                                    id='kodePos'
                                    value={kodePos}
                                    onChange={handleKodePosChange}
                                    placeholder='Kode Pos'
                                />
                            </div>
                            <div className='navigation-buttons-pemesanan'>
                                <Link to='/halaman-sebelumnya'>
                                    <button className='button-kembali'>
                                        Kembali
                                    </button>
                                </Link>
                                <Link to='/pembayaran'>
                                    <button className='button-lanjut'>
                                        Lanjutkan Pembayaran
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='pemesanan-total'>
                            <h2>Pemesanan</h2>
                            <div className='h2-line-pembayaran-total'></div>
                            <div className='pemesanan-total-harga'>
                                <img src='assets/img/Card/cat.png' alt='' />
                                <h2>Animal Smart Card</h2>
                                <p>Rp. 30.000</p>
                                <div className='count-pemesanan'>
                                    <Count />
                                </div>

                                <div className='new-icons-cart-like'>
                                    <div className='new-to-cart'>
                                        <Link to='/new-cart'>
                                            <AiFillHeart />
                                        </Link>
                                    </div>

                                    <div className='new-my-like'>
                                        <Link to='/new-heart'>
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
                                    <div className='p-line-pemesanan-total'></div>
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

export default Pemesanan;
