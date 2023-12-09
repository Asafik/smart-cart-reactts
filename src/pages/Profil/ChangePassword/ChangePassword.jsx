import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { PiEye, PiEyeClosed } from 'react-icons/pi';

import Navbar from '../../../Components/Navbar/NavbarComponents';
import Footer from '../../../Components/Footer/FooterComponents';
import './changepassworduser.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorPopupVisible, setErrorPopupVisible] = useState(false);
    const [successPopupVisible, setSuccessPopupVisible] = useState(false);

    const handleChangeOldPassword = (e) => {
        setOldPassword(e.target.value);
    };

    const handleChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const toggleShowOldPassword = () => {
        setShowOldPassword(!showOldPassword);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const showErrorPopup = () => setErrorPopupVisible(true);
    const hideErrorPopup = () => setErrorPopupVisible(false);

    const showSuccessPopup = () => setSuccessPopupVisible(true);
    const hideSuccessPopup = () => setSuccessPopupVisible(false);

    const handleUbahKataSandi = () => {
        // Logika untuk memeriksa kesesuaian kata sandi
        if (oldPassword === newPassword) {
            // Kata sandi lama dan baru sama, munculkan popup error
            showErrorPopup();
        } else {
            // Logika untuk mengganti kata sandi (tambahkan sesuai kebutuhan)
            // ...
            // Setelah berhasil mengganti kata sandi, munculkan popup sukses
            showSuccessPopup();
        }
    };

    return (
        <>
            <Navbar />
            <Container>
                <Row className='change-password-page min-vh-100'>
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
                                <Link to='/'>Keluar</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='change-password-user'>
                            <h3>Ubah Kata Sandi</h3>

                            <div className='sandi-lama-user'>
                                <label>Kata Sandi Lama:</label>
                                <div className='input-with-icon-user'>
                                    <input
                                        type={
                                            showOldPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        value={oldPassword}
                                        onChange={handleChangeOldPassword}
                                        className='form-input-sandi-lama-user'
                                    />
                                    <div
                                        className='eye-icon-user'
                                        onClick={toggleShowOldPassword}
                                    >
                                        {showOldPassword ? (
                                            <PiEye />
                                        ) : (
                                            <PiEyeClosed />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='sandi-baru-user'>
                                <label>Kata Sandi Baru:</label>
                                <div className='input-with-icon-user'>
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        value={newPassword}
                                        onChange={handleChangeNewPassword}
                                        className='form-input-sandi-baru-user'
                                    />
                                    <div
                                        className='eye-icon-user'
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? (
                                            <PiEye />
                                        ) : (
                                            <PiEyeClosed />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='konfirmasi-sandi-baru-user'>
                                <label>Konfirmasi Kata Sandi Baru:</label>
                                <div className='input-with-icon-user'>
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        value={confirmPassword}
                                        onChange={handleChangeConfirmPassword}
                                        className='form-input-konfirmasi-sandi-baru-user'
                                    />
                                    <div
                                        className='eye-icon-user'
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? (
                                            <PiEye />
                                        ) : (
                                            <PiEyeClosed />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button
                                className='ubah-kata-sandi-button'
                                onClick={handleUbahKataSandi}
                            >
                                Ubah Kata Sandi
                            </button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Footer />
            
            {/* Popup Kesalahan */}
            <Modal show={errorPopupVisible} onHide={hideErrorPopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Kesalahan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Kata sandi lama dan kata sandi baru tidak boleh sama.
                </Modal.Body>
                <Modal.Footer>
                    <Button className='popup-change-password-failed' variant="secondary" onClick={hideErrorPopup}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Popup Sukses */}
            <Modal show={successPopupVisible} onHide={hideSuccessPopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Sukses</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Selamat, Anda berhasil mengganti kata sandi baru!
                </Modal.Body>
                <Modal.Footer>
                    <Button className='popup-change-password-succes' variant="secondary" onClick={hideSuccessPopup}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChangePassword;
