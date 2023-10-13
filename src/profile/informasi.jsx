import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

import NavbarComponents from '../components/navbarcomponents';
import FooterComponents from '../components/footercomponents';

function Informasi() {
    // State untuk menyimpan URL foto profil
    const [profileImage, setProfileImage] = useState('url_foto_default.jpg');

    // Fungsi untuk mengubah foto profil
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
    };

    return (
        <>
            <NavbarComponents />
            <Container>
                <Row className='min-vh-100'>
                    <Col>
                        <div className='informasi-profile'>
                            <h3>Akun Saya</h3>
                            {/* Tampilkan foto profil */}
                            <img src={profileImage} alt='Foto Profil' />
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
                        <div className='informasi-pribadi'>
                            <h3>Informasi Pribadi</h3>
                            <p>
                                Kelola informasi profil Anda untuk mengontrol,
                                melindungi, dan mengamankan akun
                            </p>
                            <div className='data-informasi'>
                                <p>
                                    Nama{' '}
                                    <span className='nama'>Ahmad Amrozi</span>
                                </p>
                                <p>
                                    Email{' '}
                                    <span className='email'>
                                        grisserdg@example.com
                                    </span>
                                </p>
                                <p>
                                    Nomor Telepon{' '}
                                    <span className='no-hp'>08123456789</span>
                                </p>
                                <p>
                                    Alamat{' '}
                                    <span className='alamat'>
                                        Jl. Contoh No. 123
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='ganti-profil'>
                            {/* Tampilkan foto profil */}
                            <img
                                src={profileImage}
                                alt='Foto Profil'
                                className='profile-image'
                            />

                            {/* Form untuk mengganti foto profil */}
                            <input
                                type='file'
                                accept='image/*'
                                className='file-input'
                                onChange={handleImageChange}
                                id='fileInput'
                            />
                            <label htmlFor='fileInput' className='file-label'>
                                <FaEdit />
                            </label>
                            <p>Ukuran gambar : maks 1 MB</p>
                            <p>Format gambar : .JPEG, .PNG</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterComponents />
        </>
    );
}

export default Informasi;
