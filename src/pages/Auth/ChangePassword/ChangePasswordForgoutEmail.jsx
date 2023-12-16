import { useState } from 'react';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import './ChangePasswordForgoutEmail.css';

const ChangePasswordForgoutEmail = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lakukan validasi atau aksi lainnya di sini
    };

    return (
        <div className='change-password-email'>
            <div className='forgot-password-form-email'>
                <img
                    src='assets/img/logo.png'
                    alt='Logo'
                    className='logo-image-email'
                />
                <h2>Buat Kata Sandi Baru</h2>

                <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                    <div className='input-with-icon-change-password-email'>
                        <label htmlFor='newPassword'>Kata Sandi Baru</label>
                        <div className='password-input-change-password-email'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='newPassword'
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                            />
                            <div
                                className='password-toggle-icon-change-password-email'
                                onClick={handleTogglePasswordVisibility}
                            >
                                {showPassword ? <PiEyeClosed /> : <PiEye />}
                            </div>
                        </div>
                    </div>

                    <div className='input-with-icon-change-password-email'>
                        <label htmlFor='confirmPassword'>
                            Konfirmasi Kata Sandi Baru
                        </label>
                        <div className='password-input-change-password-email'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            <div
                                className='password-toggle-icon-change-password-email'
                                onClick={handleTogglePasswordVisibility}
                            >
                                {showPassword ? <PiEyeClosed /> : <PiEye />}
                            </div>
                        </div>
                    </div>

                    <button>Ubah Kata Sandi</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordForgoutEmail;
