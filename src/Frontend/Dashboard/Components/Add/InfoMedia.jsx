import React, { useState } from 'react';
import './css/InfoMedia.css';

const InfoMedia = () => {
    const handleUrlClick = () => {
        const imageUrl = prompt('Masukkan URL gambar:');
        if (imageUrl) {
            // Lakukan sesuatu dengan URL gambar yang dimasukkan, misalnya menampilkan di console
            console.log('URL Gambar:', imageUrl);
            // TODO: Lakukan sesuatu dengan URL gambar, misalnya menampilkannya
            setUrlImage(imageUrl);
        }
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [urlImage, setUrlImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Lakukan sesuatu dengan file yang dipilih, misalnya mengatur state
            setSelectedFile(file);
            setUrlImage(null); // Reset URL gambar jika ada
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            // Lakukan sesuatu dengan file yang dijatuhkan, misalnya mengatur state
            setSelectedFile(file);
            setUrlImage(null); // Reset URL gambar jika ada
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className='infomedia-add'>
            <div className='h3-text-p'>
                <h3>Media</h3>
                <p onClick={handleUrlClick}>Tambahkan media dari URL</p>
            </div>

            {/* Input untuk unggah file */}
            <input
                type='file'
                accept='image/*' // Hanya menerima file gambar
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id='fileInput'
            />

            <div
                className='drop-area'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById('fileInput').click()}
            >
                {!selectedFile && !urlImage && (
                    <>
                        <label htmlFor=''>
                            Tarik dan lepas gambar kamu disini
                        </label>
                        <p>Telusuri Gambar</p>
                    </>
                )}
                {selectedFile && (
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        alt='Uploaded'
                    />
                )}
                {urlImage && <img src={urlImage} alt='URL Image' />}
            </div>
        </div>
    );
};

export default InfoMedia;
