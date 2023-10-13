import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarComponents from '../components/navbarcomponents';
import FooterComponents from '../components/footercomponents';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Koleksi = () => {
    // Membuat state untuk mengelola status terbuka/tutup masing-masing akordeon
    const [isOpen, setIsOpen] = useState({
        accordion1: false,
        accordion2: false,
        accordion3: false,
        accordion4: false,
    });

    // Fungsi untuk mengganti status terbuka/tutup akordeon
    const toggleAccordion = (accordionName) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [accordionName]: !prevState[accordionName],
        }));
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
                        <div className='koleksi-saya'>
                            <h3>Koleksi Saya</h3>
                            <div
                                className={`accordion ${
                                    isOpen.accordion1 ? 'open' : ''
                                }`}
                            >
                                <div
                                    className='accordion-header'
                                    onClick={() =>
                                        toggleAccordion('accordion1')
                                    }
                                >
                                    <img
                                        src='assets/img/kelas/kelas-1.png'
                                        alt='Judul Akordeon'
                                    />
                                    <div className='nama-hewan'>
                                        <p className='nama-detail-hewan'>
                                            Gajah (Elephant)
                                        </p>
                                        <p className='kategori-hewan'>
                                            Seri Hewan
                                        </p>
                                    </div>
                                    <span
                                        className={`icon ${
                                            isOpen.accordion1 ? 'open' : ''
                                        }`}
                                    >
                                        <FaChevronDown
                                            className={`chevron ${
                                                isOpen.accordion1 ? 'open' : ''
                                            }`}
                                        />
                                    </span>
                                </div>
                                {isOpen.accordion1 && (
                                    <div className='accordion-content'>
                                        {/* Konten akordeon */}
                                        <p>
                                            Ini adalah konten dari akordeon 1.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`accordion ${
                                    isOpen.accordion2 ? 'open' : ''
                                }`}
                            >
                                <div
                                    className='accordion-header'
                                    onClick={() =>
                                        toggleAccordion('accordion2')
                                    }
                                >
                                    <img
                                        src='assets/img/kelas/kelas-2.png'
                                        alt='Judul Akordeon'
                                    />
                                    <div className='nama-hewan'>
                                        <p className='nama-detail-hewan'>
                                            Singa (Lion)
                                        </p>
                                        <p className='kategori-hewan'>
                                            Seri Hewan
                                        </p>
                                    </div>
                                    <span
                                        className={`icon ${
                                            isOpen.accordion2 ? 'open' : ''
                                        }`}
                                    >
                                        <FaChevronDown
                                            className={`chevron ${
                                                isOpen.accordion2 ? 'open' : ''
                                            }`}
                                        />
                                    </span>
                                </div>
                                {isOpen.accordion2 && (
                                    <div className='accordion-content'>
                                        {/* Konten akordeon */}
                                        <p>
                                            Ini adalah konten dari akordeon 2.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`accordion ${
                                    isOpen.accordion3 ? 'open' : ''
                                }`}
                            >
                                <div
                                    className='accordion-header'
                                    onClick={() =>
                                        toggleAccordion('accordion3')
                                    }
                                >
                                    <img
                                        src='assets/img/kelas/kelas-3.png'
                                        alt='Judul Akordeon'
                                    />
                                    <div className='nama-hewan'>
                                        <p className='nama-detail-hewan'>
                                            Harimau (Tiger)
                                        </p>
                                        <p className='kategori-hewan'>
                                            Seri Hewan
                                        </p>
                                    </div>
                                    <span
                                        className={`icon ${
                                            isOpen.accordion3 ? 'open' : ''
                                        }`}
                                    >
                                        <FaChevronDown
                                            className={`chevron ${
                                                isOpen.accordion3 ? 'open' : ''
                                            }`}
                                        />
                                    </span>
                                </div>
                                {isOpen.accordion3 && (
                                    <div className='accordion-content'>
                                        {/* Konten akordeon */}
                                        <p>
                                            Ini adalah konten dari akordeon 3.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`accordion ${
                                    isOpen.accordion4 ? 'open' : ''
                                }`}
                            >
                                <div
                                    className='accordion-header'
                                    onClick={() =>
                                        toggleAccordion('accordion4')
                                    }
                                >
                                    <img
                                        src='assets/img/kelas/kelas-4.png'
                                        alt='Judul Akordeon'
                                    />
                                    <div className='nama-hewan'>
                                        <p className='nama-detail-hewan'>
                                            Jerapah (Giraffe)
                                        </p>
                                        <p className='kategori-hewan'>
                                            Seri Hewan
                                        </p>
                                    </div>
                                    <span
                                        className={`icon ${
                                            isOpen.accordion4 ? 'open' : ''
                                        }`}
                                    >
                                        <FaChevronDown
                                            className={`chevron ${
                                                isOpen.accordion4 ? 'open' : ''
                                            }`}
                                        />
                                    </span>
                                </div>
                                {isOpen.accordion4 && (
                                    <div className='accordion-content'>
                                        {/* Konten akordeon */}
                                        <p>
                                            Ini adalah konten dari akordeon 4.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='card'>{/* Konten Kartu */}</div>
                    </Col>
                </Row>
            </Container>
            <FooterComponents />
        </>
    );
};

export default Koleksi;
