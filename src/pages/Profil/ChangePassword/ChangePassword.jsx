import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PiEye, PiEyeClosed } from 'react-icons/pi';

import Navbar from '../../../Components/Navbar/NavbarComponents';
import Footer from '../../../Components/Footer/FooterComponents';
import './changepassworduser.css';

const ChangePassword = () => {
    // State untuk menyimpan nilai input dan status tampilan password
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorPopupVisible, setErrorPopupVisible] = useState(false);
    const [successPopupVisible, setSuccessPopupVisible] = useState(false);

    // Fungsi untuk meng-handle perubahan nilai input kata sandi lama
    const handleChangeOldPassword = (e) => {
        setOldPassword(e.target.value);
    };

    // Fungsi untuk meng-handle perubahan nilai input kata sandi baru
    const handleChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    };

    // Fungsi untuk meng-handle perubahan nilai input konfirmasi kata sandi baru
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    // Fungsi untuk toggle tampilan/hide password lama
    const toggleShowOldPassword = () => {
        setShowOldPassword(!showOldPassword);
    };

    // Fungsi untuk toggle tampilan/hide password baru
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // Fungsi untuk menampilkan popup kesalahan
    const showErrorPopup = () => setErrorPopupVisible(true);
    // Fungsi untuk menyembunyikan popup kesalahan
    const hideErrorPopup = () => setErrorPopupVisible(false);

    // Fungsi untuk menampilkan popup sukses
    const showSuccessPopup = () => setSuccessPopupVisible(true);
    // Fungsi untuk menyembunyikan popup sukses
    const hideSuccessPopup = () => setSuccessPopupVisible(false);

    // Fungsi untuk meng-handle pengubahan kata sandi
    const handleUbahKataSandi = () => {
        // Logika untuk memeriksa kesesuaian kata sandi
        if (oldPassword === newPassword) {
            // Kata sandi lama dan baru sama, munculkan popup error
            showErrorPopup();
        } else {
            // Logika untuk mengganti kata sandi
            // ...
            // Setelah berhasil mengganti kata sandi, munculkan popup sukses
            showSuccessPopup();
        }
    };

    return (
        <>
            {/* Navbar dan Konten */}
            <Navbar />
            <Container>
                <Row className='change-password-page min-vh-100'>
                    <Col>
                        {/* Informasi Profil */}
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
                        {/* Form Ubah Kata Sandi */}
                        <div className='change-password-user'>
                            <h3>Ubah Kata Sandi</h3>

                            {/* Input Kata Sandi Lama */}
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

                            {/* Input Kata Sandi Baru */}
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

                            {/* Input Konfirmasi Kata Sandi Baru */}
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

                            {/* Tombol Ubah Kata Sandi */}
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

            {/* Footer */}
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
                    <Button
                        className='popup-change-password-failed'
                        variant='secondary'
                        onClick={hideErrorPopup}
                    >
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
                    <Button
                        className='popup-change-password-succes'
                        variant='secondary'
                        onClick={hideSuccessPopup}
                    >
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChangePassword;
