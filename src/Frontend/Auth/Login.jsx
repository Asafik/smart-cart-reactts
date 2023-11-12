import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import ikon Email dan Lock dari React Icons

import './css/auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false); // State untuk menampilkan alert kesalahan

    const handleLogin = (e) => {
        e.preventDefault();

        // Di sini Anda bisa melakukan validasi email dan password
        // Misalnya, jika validasi gagal, tampilkan alert kesalahan
        if (email !== 'email@example.com' || password !== 'password123') {
            setShowAlert(true);

            // Set timeout untuk menghilangkan notifikasi kesalahan setelah 3 detik
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        } else {
            // Jika email dan password benar, arahkan ke halaman dashboard
            window.location.href = '/dashboard';
        }
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

                    {showAlert && (
                        <div className='alert alert-danger mt-3'>
                            Email atau sandi salah. Silakan coba lagi.
                        </div>
                    )}

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
        </div>
    );
};

export default Login;
