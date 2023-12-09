import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from '../../../../components/Navbar/NavbarComponents';
import Footer from '../../../../components/Footer/FooterComponents';
import './koleksi.css';

import KoleksiCard from '../Components/Koleksi/KoleksiCard';
import KolekComp from '../Components/Questions/KolekComp/KolekComp';

const Koleksi = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Row className='koleksi min-vh-100'>
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
                                <Link to='/ubah-kata-sandi'>
                                    Ubah Kata Sandi
                                </Link>
                                <Link to='/logout'>Keluar</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <KoleksiCard />
                    </Col>

                    <Col>
                        <div className='card'>
                            <h2>frequently asked questions</h2>
                            <p>
                                pertanyaan yang mungkin Anda tanyakan tentang
                                produk dan layanan kami
                            </p>
                            <KolekComp />

                            <h2 style={{ marginTop: '50px' }}>
                                Punya pertanyaan lain ?
                            </h2>
                            <p style={{ fontSize: '13px' }}>
                                tidak dapat menemukan jawaban yang <br /> Anda
                                cari? Silahkan Hubungi Kontak Kami.
                            </p>
                            <Link className='contact-link'>Hubungi Kami</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Koleksi;
