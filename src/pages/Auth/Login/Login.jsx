import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';

import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showIncorrectModal, setShowIncorrectModal] = useState(false);
    const [showCorrectModal, setShowCorrectModal] = useState(false);
    const [loginType, setLoginType] = useState('');

    const handleCloseIncorrectModal = () => setShowIncorrectModal(false);
    const handleShowIncorrectModal = () => setShowIncorrectModal(true);
    const handleCloseCorrectModal = () => setShowCorrectModal(false);
    const handleShowCorrectModal = (type) => {
        setLoginType(type);
        setShowCorrectModal(true);
    };

    const correctAdminEmail = 'admin@example.com';
    const correctAdminPassword = 'admin123';
    const correctUserEmail = 'user@example.com';
    const correctUserPassword = 'user123';

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === correctAdminEmail && password === correctAdminPassword) {
            handleShowCorrectModal('admin');
            // Handle successful admin login (redirect or other actions)
        } else if (email === correctUserEmail && password === correctUserPassword) {
            handleShowCorrectModal('user');
            // Handle successful user login (redirect or other actions)
        } else {
            handleShowIncorrectModal();
        }
    };

    const handleOkButtonClick = () => {
        handleCloseCorrectModal();
        if (loginType === 'admin') {
            // Redirect to admin dashboard
            window.location.href = '/dashboard';
        } else if (loginType === 'user') {
            // Redirect to user home
            window.location.href = '/';
        }
    };

    return (
        <div className='login'>
            <form className='login-form' onSubmit={handleLogin}>
                <div className='login-form-content'>
                    <div className='text-center'>
                        <Link to='/'>
                            <img src='assets/img/logo.png' alt='Your Logo' />
                        </Link>
                    </div>
                    <div className=' mt-0'>
                        <div className='input-icon'>
                            <FaEnvelope className='icon' />
                            <input
                                type='email'
                                className='form-control-login'
                                placeholder='Email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className=' mt-3'>
                        <div className='input-icon'>
                            <FaLock className='icon' />
                            <input
                                type='password'
                                className='form-control-login'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='login-submit'>
                        <button
                            type='submit'
                            className='btn btn-warning fw-bold text-white'
                        >
                            Masuk
                        </button>
                    </div>

                    <p className='mt-2'>
                        Belum punya akun?{' '}
                        <Link to='/register' className='text-warning'>
                            Daftar
                        </Link>
                    </p>
                        <Link to='/lupa-kata-sandi' className='text-warning'>Lupa Password</Link>
                </div>
            </form>

            {/* Modal for Incorrect Password */}
            <Modal show={showIncorrectModal} onHide={handleCloseIncorrectModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Incorrect Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Email atau kata sandi salah. Silakan coba lagi.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseIncorrectModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Correct Email and Password */}
            <Modal show={showCorrectModal} onHide={handleCloseCorrectModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {`Login berhasil dengan ${
                            loginType === 'admin' ? 'admin' : 'user'
                        }`}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={handleOkButtonClick}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Login;
