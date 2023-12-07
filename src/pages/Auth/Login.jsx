import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import './auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
    const [loginType, setLoginType] = useState('');

    const adminCredentials = {
        email: 'admin@example.com',
        password: 'admin123',
    };
    const userCredentials = { email: 'user@example.com', password: 'user123' };

    const handleLogin = (e) => {
        e.preventDefault();

        if (
            email === adminCredentials.email &&
            password === adminCredentials.password
        ) {
            setLoginType('admin');
            setSuccessPopup(true);
        } else if (
            email === userCredentials.email &&
            password === userCredentials.password
        ) {
            setLoginType('user');
            setSuccessPopup(true);
        } else {
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setSuccessPopup(false);
        setLoginType('');
        x``;
    };

    return (
        <div className='Auth-form-container'>
            <form className='Auth-form' onSubmit={handleLogin}>
                <div className='Auth-form-content'>
                    <div className='text-center'>
                        <Link to='/'>
                            <img src='assets/img/logo.png' alt='Your Logo' />
                        </Link>
                    </div>
                    <div className='form-group mt-3'>
                        <div className='input-icon'>
                            <FaEnvelope className='icon' />
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form-group mt-3'>
                        <div className='input-icon'>
                            <FaLock className='icon' />
                            <input
                                type='password'
                                className='form-control'
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
                </div>
            </form>

            {showPopup && (
                <div className='overlay-login'>
                    <div className='popup popup-failed-login'>
                        <p>Email atau kata sandi salah. Silakan coba lagi.</p>
                        <button
                            className='popup-button popup-button-failed-login'
                            onClick={closePopup}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {successPopup && (
                <div className='popup-login'>
                    <div className='popup popup-succes-login'>
                        <p>{`Login berhasil dengan ${
                            loginType === 'admin' ? 'admin' : 'user'
                        }`}</p>
                        <button
                            className='popup-button-success'
                            onClick={() => {
                                closePopup();
                                if (loginType === 'admin') {
                                    // Arahkan ke halaman dashboard untuk admin
                                    window.location.href = '/dashboard';
                                } else {
                                    // Arahkan ke halaman home untuk user
                                    window.location.href = '/';
                                }
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
