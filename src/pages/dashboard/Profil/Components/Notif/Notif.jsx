import React from 'react';
import './Notif.css';

import Checkbox from '../Ceckbox/Checkbok';
const Notif = () => {
    const requestNotificationPermission = async () => {
        try {
            // Meminta izin notifikasi
            const permission = await Notification.requestPermission();

            if (permission === 'granted') {
                // Jika izin diberikan, tampilkan notifikasi
                new Notification('Izin Notifikasi Diberikan', {
                    body: 'Anda sekarang dapat menerima notifikasi.',
                });
            }
        } catch (error) {
            console.error('Gagal meminta izin notifikasi:', error);
        }
    };

    return (
        <div className='notif-page'>
            <h3>Perangkat Terbaru</h3>

            <p>
                Kami memerlukan izin dari browser Anda untuk menampilkan
                notifikasi.{' '}
                <span onClick={requestNotificationPermission}>Minta Izin</span>
            </p>

            <div className='notif-page-notifikasi'>
                <div className='text-tipe'>
                    <p>Tipe</p>
                </div>
                <p>Email</p>
                <p>Browser</p>

                <p>App</p>
            </div>
            <hr />
            <div>
                <Checkbox />
            </div>

            <div className='simpan-reset-notifikasi'>
                <button className='simpan-button'>Simpan</button>
                <button className='reset-button-inputan'>Reset</button>
            </div>
        </div>
    );
};

export default Notif;
