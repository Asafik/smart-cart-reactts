// InfoMedia.js

import React, { useState } from 'react';
import './css/infomedia.css';

const InfoMedia = () => {
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        setVideo(URL.createObjectURL(file));
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        // Memeriksa tipe berkas (hanya menerima gambar dan video)
        if (file.type.startsWith('image/')) {
            setImage(URL.createObjectURL(file));
        } else if (file.type.startsWith('video/')) {
            setVideo(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <div className='info-media'>
                <p>Gambar</p>
                <div
                    className='drop-container'
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <p>
                        Tarik dan lepas <br /> gambar kamu disini.
                    </p>
                    <input
                        type='file'
                        id='imageUpload'
                        accept='image/*'
                        onChange={handleImageUpload}
                        style={{
                            display: 'none',
                        }}
                    />
                    {image ? (
                        <img
                            src={image}
                            alt='Unggah Foto'
                            className='image-preview'
                        />
                    ) : (
                        <label className='upload-label' htmlFor='imageUpload'>
                            Telusuri Gambar
                        </label>
                    )}
                </div>
                <p
                    style={{
                        marginTop: '5px',
                        marginBottom: '-10px',
                    }}
                >
                    Video
                </p>
                <div
                    className='drop-container video-container'
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <input
                        type='file'
                        id='videoUpload'
                        accept='video/*'
                        onChange={handleVideoUpload}
                        style={{
                            display: 'none',
                        }}
                    />
                    <p>
                        Tarik dan lepas <br /> video kamu disini.
                    </p>
                    {video ? (
                        <video controls width='400' className='video-preview'>
                            <source src={video} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <label className='upload-label' htmlFor='videoUpload'>
                            Telusuri Video
                        </label>
                    )}
                </div>
                <div className='info-button-save'>
                    <button className='custom-button'>Simpan</button>
                    <button className='custom-button'>
                        Simpan & Pratinjau
                    </button>
                </div>
            </div>
        </>
    );
};

export default InfoMedia;
