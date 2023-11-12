import React from 'react';
import './css/sidebar.css';
import { FaBars, FaHome, FaList, FaPlus, FaEdit } from 'react-icons/fa';
import {
    FaEnvelope,
    FaBell,
    FaFlag,
    FaUser,
    FaKey,
    FaSignOutAlt,
} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

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
                            style={{ width: '180px', height: '80px' }}
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
                        <Dropdown>
                            <Dropdown.Toggle
                                variant='transparent'
                                id='dropdown-basic'
                            >
                                <img
                                    src='assets/img/profil/kera.jpg'
                                    alt='Your Image'
                                />
                                <span className='name'>Kentang</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <FaUser /> Edit Profile
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <FaKey /> Ganti Password
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <FaSignOutAlt /> Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
                            href='/tambah-produk'
                            className='tambah-produk-link'
                        >
                            <FaPlus className='tambah-produk-icon' /> Tambahkan
                            Produk
                        </Nav.Link>
                        <Nav.Link
                            href='/perbarui-produk'
                            className='perbarui-produk-link'
                        >
                            <FaEdit className='perbarui-produk-icon' /> Perbarui
                            Produk
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        </>
    );
};

export default App;
