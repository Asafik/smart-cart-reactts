import React, { useState, useRef } from 'react';
import './css/Profile.css';

const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // Lakukan logika upload di sini, misalnya, kirim file ke server
        if (selectedFile) {
            console.log('Mengunggah file:', selectedFile);
            // Tambahkan logika upload Anda di sini
        } else {
            console.log('Tidak ada file yang dipilih');
        }
    };

    const handleClickFileInput = () => {
        fileInputRef.current.click();
    };

    const handleReset = () => {
        setSelectedFile(null);
        // Secara opsional, Anda juga dapat membersihkan nilai input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setBirthdate('');
        setGender('');
    };

    return (
        <div className='profile-page'>
            <h3>Informasi Akun</h3>

            <div className='upload-foto-profile'>
                <div className='photo-preview'>
                    {selectedFile && (
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt='Preview'
                            className='preview-image'
                        />
                    )}
                </div>

                <input
                    type='file'
                    accept='image/*'
                    onChange={handleFileChange}
                    className='file-input'
                    ref={fileInputRef}
                />

                <div className='button-container'>
                    <button
                        onClick={handleClickFileInput}
                        className='upload-button'
                    >
                        Unggah Foto Terbaru
                    </button>
                    <button onClick={handleReset} className='reset-button'>
                        Reset
                    </button>
                </div>

                <p className='upload-info'>
                    Unggah dengan format JPG, GIF, atau PNG. Maksimum ukuran
                    file: 100 MB.
                </p>
            </div>

            <hr />

            <div className='profile-form'>
                <div className='nama-handphone-tanggal-profile'>
                    <label>Nama:</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='form-input'
                    />

                    <label>No Handphone:</label>
                    <input
                        type='text'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='form-input'
                    />

                    <label>Tanggal Lahir:</label>
                    <input
                        type='date'
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        className='form-input'
                    />
                </div>
                <div className='email-alamat-kelamin'>
                    <label>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-input'
                    />

                    <label>Alamat:</label>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='form-input'
                    />

                    <label>Jenis Kelamin:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className='form-input'
                    >
                        <option value=''>Pilih Jenis Kelamin</option>
                        <option value='Laki-laki'>Laki-laki</option>
                        <option value='Perempuan'>Perempuan</option>
                    </select>
                </div>
            </div>
            <div className='simpan-reset'>
                <button className='simpan-button'>Simpan</button>
                <button className='reset-button-inputan'>Reset</button>
            </div>
        </div>
    );
};

export default Profile;
