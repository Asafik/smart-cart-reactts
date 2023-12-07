import React, { useState } from 'react';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import './changepassword.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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

    return (
        <div className='changepassword-page'>
            <h3>Rubah Kata Sandi</h3>

            <div className='sandi-lama'>
                <label>Kata Sandi Lama:</label>
                <div className='input-with-icon'>
                    <input
                        type={showOldPassword ? 'text' : 'password'}
                        value={oldPassword}
                        onChange={handleChangeOldPassword}
                        className='form-input-sandi-lama'
                    />
                    <div
                        className='eye-icon-sandi-lama'
                        onClick={toggleShowOldPassword}
                    >
                        {showOldPassword ? <PiEye /> : <PiEyeClosed />}
                    </div>
                </div>
            </div>

            <div className='update-sandi'>
                <div className='sandi-baru'>
                    <label>Kata Sandi Baru:</label>
                    <div className='input-with-icon'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={handleChangeNewPassword}
                            className='form-input-sandi-baru'
                        />
                        <div className='eye-icon' onClick={toggleShowPassword}>
                            {showPassword ? <PiEye /> : <PiEyeClosed />}
                        </div>
                    </div>
                </div>
                <div className='konfirmasi-sandi-baru'>
                    <label>Konfirmasi Kata Sandi Baru:</label>
                    <div className='input-with-icon'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleChangeConfirmPassword}
                            className='form-input-konfirmasi-sandi-baru'
                        />
                        <div className='eye-icon' onClick={toggleShowPassword}>
                            {showPassword ? <PiEye /> : <PiEyeClosed />}
                        </div>
                    </div>
                </div>
            </div>

            <h3>Persyaratan Kata Sandi</h3>
            <ul>
                <li>
                    Panjang minimal 8 karakter - semakin banyak, semakin baik
                </li>
                <li>Setidaknya satu karakter huruf kecil</li>
                <li>Setidaknya satu angka, simbol, atau karakter spasi</li>
            </ul>

            <div className='simpan-reset-changepassword'>
                <button className='simpan-button'>Simpan</button>
                <button className='reset-button-inputan'>Reset</button>
            </div>
        </div>
    );
};

export default ChangePassword;
