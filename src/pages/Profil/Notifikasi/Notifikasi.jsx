import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { useState } from 'react';

import Navbar from '../../../Components/Navbar/NavbarComponents';
import Footer from '../../../Components/Footer/FooterComponents';
import './notifikasi.css';

const Notifikasi = () => {
    const [switches, setSwitches] = useState({
        switch1: false,
        switch2: false,
        // Tambahkan lebih banyak saklar
    });

    const handleSwitchChange = (switchName) => {
        setSwitches((prevState) => ({
            ...prevState,
            [switchName]: !prevState[switchName],
        }));
        // Melakukan tindakan saat tombol tertentu diaktifkan
    };
    return (
        <>
            <Navbar />
            <Container>
                <Row className='notifikasi-saya min-vh-100'>
                    <Col>
                        <div className='informasi-profile'>
                            <h3>Akun Saya</h3>
                            {/* Tampilkan foto profil */}
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt='Foto Profil'
                            />
                            <p className='name'>Ahmad Amrozi</p>
                            <p className='email'>johndoe@example.com</p>

                            <div className='menu'>
                                <Link to='/informasi'>Informasi Pribadi</Link>
                                <Link to='/koleksi'>Koleksi Saya</Link>
                                <Link to='/notifikasi'>Notifikasi</Link>
                                <Link to='/bahasa'>Bahasa</Link>
                                <Link to='/logout'>Keluar</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='notifikasi'>
                            <h3>Notifikasi</h3>
                            <p>Atur notifikasi yang kamu terima disini</p>
                            <p className='text-icons'>
                                <AiOutlineShoppingCart />
                                Transaksi Pembelian <span>Email</span>
                            </p>

                            <div className='from-position'>
                                <span className='custom-switch-text'>
                                    Menunggu Pembayaran
                                </span>
                                <label className='custom-switch'>
                                    <input
                                        type='checkbox'
                                        checked={switches.switch1}
                                        onChange={() =>
                                            handleSwitchChange('switch1')
                                        }
                                    />
                                    <span className='slider round'></span>
                                </label>
                            </div>

                            <div className='from-position'>
                                <span className='custom-switch-text'>
                                    Menunggu Konfirmasi
                                </span>
                                <label className='custom-switch'>
                                    <input
                                        type='checkbox'
                                        checked={switches.switch2}
                                        onChange={() =>
                                            handleSwitchChange('switch2')
                                        }
                                    />
                                    <span className='slider round'></span>
                                </label>
                            </div>

                            <div className='from-position'>
                                <span className='custom-switch-text'>
                                    Pesanan Diproses
                                </span>
                                <label className='custom-switch'>
                                    <input
                                        type='checkbox'
                                        checked={switches.switch3}
                                        onChange={() =>
                                            handleSwitchChange('switch3')
                                        }
                                    />
                                    <span className='slider round'></span>
                                </label>
                            </div>

                            <div className='from-position'>
                                <span className='custom-switch-text'>
                                    Pesanan Dikirim
                                </span>
                                <label className='custom-switch'>
                                    <input
                                        type='checkbox'
                                        checked={switches.switch4}
                                        onChange={() =>
                                            handleSwitchChange('switch4')
                                        }
                                    />
                                    <span className='slider round'></span>
                                </label>
                            </div>

                            <div className='from-position'>
                                <span className='custom-switch-text'>
                                    Pesanan Tiba
                                </span>
                                <label className='custom-switch'>
                                    <input
                                        type='checkbox'
                                        checked={switches.switch5}
                                        onChange={() =>
                                            handleSwitchChange('switch5')
                                        }
                                    />
                                    <span className='slider round'></span>
                                </label>
                            </div>

                            <p className='info-icons'>
                                <HiOutlineInformationCircle />
                                <span>Informasi</span>
                            </p>

                            <div className='from-position'>
                                <span className='custom-switch-text'>
                                    Promo
                                </span>
                                <label className='custom-switch'>
                                    <input
                                        type='checkbox'
                                        checked={switches.switch6}
                                        onChange={() =>
                                            handleSwitchChange('switch6')
                                        }
                                    />
                                    <span className='slider round'></span>
                                </label>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Notifikasi;
