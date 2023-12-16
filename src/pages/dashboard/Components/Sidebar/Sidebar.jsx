import React from 'react';
import './sidebar.css';
import {
    FaHome,
    FaList,
    FaPlus,
    FaEnvelope,
    FaBell,
    FaFlag,
    FaSignOutAlt,
} from 'react-icons/fa';

import { Dropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const App = () => {
    const notificationCounts = {
        FaEnvelope: 5,
        FaBell: 3,
        FaFlag: 2,
    };

    return (
        <>
            <div className='app'>
                <div className='navbar-dashboard'>
                    <div className='left-icons-dashboard'>
                        <img
                            src='assets/img/logo.png'
                            alt=''
                            style={{
                                width: '180px',
                                height: '80px',
                            }}
                        />
                    </div>
                    <div className='right-icons-dashboard'>
                        <div className='notification-icon'>
                            <div className='notification-badge green-badge'>
                                {notificationCounts.FaEnvelope}
                            </div>
                            <FaEnvelope className='iconss FaEnvelope' />
                        </div>
                        <div className='notification-icon'>
                            <div className='notification-badge blue-badge'>
                                {notificationCounts.FaBell}
                            </div>
                            <FaBell className='iconss FaBell' />
                        </div>
                        <div className='notification-icon'>
                            <div className='notification-badge red-badge'>
                                {notificationCounts.FaFlag}
                            </div>
                            <FaFlag className='iconss FaFlag' />
                        </div>

                        <img
                            src='assets/img/profil/kera.jpg'
                            alt='Your Image'
                        />
                        <span className='name'>admin</span>
                    </div>
                </div>
                <div className='sidebar'>
                    <Nav defaultActiveKey='/dashboard' className='flex-column'>
                        <Nav.Link href='/dashboard' className='dashboard-link'>
                            <FaHome className='dashboard-icon' /> Dashboard
                        </Nav.Link>
                        <Nav.Link
                            href='/list-produk'
                            className='list-produk-link'
                        >
                            <FaList className='list-produk-icon' /> List Produk
                        </Nav.Link>
                        <Nav.Link
                            href='/produk-baru'
                            className='tambah-produk-link'
                        >
                            <FaPlus className='tambah-produk-icon' /> Tambahkan
                            Produk
                        </Nav.Link>

                       
                    </Nav>

                    <button className='keluar-button'>
    <FaSignOutAlt className='keluar-icon' />
    Keluar
</button>
                </div>
            </div>
        </>
    );
};

export default App;
