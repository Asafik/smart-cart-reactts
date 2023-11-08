import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Register = () => {
    return (
        <div className='Auth-form-container'>
            <form className='Auth-form'>
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
                        <label>Name</label>
                        <input
                            type='text'
                            className='form-control mt-1'
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <label>Email address</label>
                        <input
                            type='email'
                            className='form-control mt-1'
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <label>Password</label>
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
        </div>
    );
};

export default Register;
