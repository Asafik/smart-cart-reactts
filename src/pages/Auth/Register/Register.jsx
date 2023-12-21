import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Auth.css';

const Register = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleCloseSuccessModal = () => setShowSuccessModal(false);
    const handleShowSuccessModal = () => setShowSuccessModal(true);

    const handleCloseErrorModal = () => setShowErrorModal(false);
    const handleShowErrorModal = () => setShowErrorModal(true);

    const handleRegister = (e) => {
        e.preventDefault();

        // Validasi sederhana
        if (!username || !email || !password) {
            handleShowErrorModal();
            return;
        }

        // Validasi email menggunakan regex sederhana
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            handleShowErrorModal();
            return;
        }

        // Validasi password, misalnya minimal 6 karakter
        if (password.length < 6) {
            handleShowErrorModal();
            return;
        }

        // Logika pendaftaran di sini

        // Setelah pendaftaran berhasil, tampilkan popup sukses
        handleShowSuccessModal();
        setIsFormSubmitted(true);
    };

    return (
        <div className='register'>
            <form className='register-form' onSubmit={handleRegister}>
                <div className='register-form-content'>
                    <div className='text-center'>
                        <Link to='/'>
                            <img
                                src='assets/img/logo.png'
                                height={100}
                                alt='Your Logo'
                            />
                        </Link>
                    </div>
                    <div className='mt-3'>
                        <input
                            type='text'
                            className='form-control-register mt-1'
                            placeholder='Enter your name'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            readOnly={isFormSubmitted}
                        />
                    </div>
                    <div className='mt-3'>
                        <input
                            type='email'
                            className='form-control-register mt-1'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly={isFormSubmitted}
                        />
                    </div>
                    <div className='mt-3'>
                        <input
                            type='password'
                            className='form-control-register mt-1'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            readOnly={isFormSubmitted}
                        />
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button
                            type='submit'
                            className='btn btn-warning text-white'
                           
                        >
                            Daftar
                        </button>
                    </div>
                    <p className='mt-2'>
                        Sudah Punya Akun?{' '}
                        <Link to='/login' className='text-warning'>
                            Login
                        </Link>
                    </p>
                </div>
            </form>

            {/* Modal for Successful Registration */}
            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrasi Berhasil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Akun Anda berhasil dibuat. Silakan login untuk melanjutkan.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={handleCloseSuccessModal}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Error */}
            <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Kesalahan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Mohon isi semua field dengan benar.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={handleCloseErrorModal}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Register;
