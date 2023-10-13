import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                            <img
                                src='assets/img/logo.png'
                                height={100}
                                alt='Your Logo'
                            />
                        </Link>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Email address</label>
                        <input
                            type='email'
                            className='form-control mt-1'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <label>Password</label>
                        <input
                            type='password'
                            className='form-control mt-1'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {showAlert && (
                        <div className='alert alert-danger mt-3'>
                            Email atau sandi salah. Silakan coba lagi.
                        </div>
                    )}

                    <div className='login-sudmit'>
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
