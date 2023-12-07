// Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './auth.css';

const Register = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        // Logika pendaftaran di sini

        // Setelah pendaftaran berhasil, tampilkan popup
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='Auth-form-container'>
            <form className='Auth-form' onSubmit={handleRegister}>
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
                        <input
                            type='text'
                            className='form-control mt-1'
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <input
                            type='email'
                            className='form-control mt-1'
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <input
                            type='password'
                            className='form-control mt-1'
                            placeholder='Enter password'
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
                    <p className=' mt-2'>
                        Sudah Punya Akun?{' '}
                        <a href='/login' className='text-warning'>
                            Login
                        </a>
                    </p>
                </div>
            </form>

            {showPopup && (
                <div className='overlay-regsiter'>
                    <div className='popup popup-success-register'>
                        <p>Registrasi berhasil!</p>
                        <button
                            className='popup-button popup-button-success-regsiter'
                            onClick={closePopup}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
