import React, { useState } from 'react';
import { FaBars, FaEnvelope, FaBell, FaFlag } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import {
    BsHouseDoor,
    BsTable,
    BsBox,
    BsFilePost,
    BsCalendar,
    BsPeople,
    BsCashStack,
    BsPerson,
} from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

const App = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const notificationCounts = {
        FaEnvelope: 5,
        FaBell: 3,
        FaFlag: 2,
    };

    return (
        <div className='app'>
            <div className={`navbar-dashboard ${isSidebarOpen ? 'open' : ''}`}>
                <div className='left-icons-dashboard'>
                    <FaBars onClick={toggleSidebar} />
                </div>
                <div className='right-icons-dashboard'>
                    <div className="notification-icon">
                        <div className="notification-badge green-badge">
                            {notificationCounts.FaEnvelope}
                        </div>
                        <FaEnvelope className='iconss FaEnvelope' />
                    </div>
                    <div className="notification-icon">
                        <div className="notification-badge blue-badge">
                            {notificationCounts.FaBell}
                        </div>
                        <FaBell className='iconss FaBell' />
                    </div>
                    <div className="notification-icon">
                        <div className="notification-badge red-badge">
                            {notificationCounts.FaFlag}
                        </div>
                        <FaFlag className='iconss FaFlag' />
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt='Your Image'
                            />
                            <span className='name'>Kentang</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Edit Profile</Dropdown.Item>
                            <Dropdown.Item>Ganti Password</Dropdown.Item>
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className='user-info'>
                    <div className='user-title'>
                        Animal Smart Card
                    </div>
                    <img
                        src='assets/img/profil/kera.jpg'
                        alt='User Avatar'
                        className='user-avatar'
                    />
                    <div className='user-details'>
                        <div className='user-name'>Admin</div>
                        <div className='user-status'>
                            <div className='online-circle'></div>
                            <div className='online-text'>Online</div>
                        </div>
                    </div>
                </div>
                <div className='search-box'>
                    <input
                        type='text'
                        placeholder='Search '
                        className='search-input'
                    />
                    <div className='search-icon'>
                        <FaSearch />
                    </div>
                </div>
                <Nav defaultActiveKey='/home' className='flex-column'>
                    <div className='navigations'>Main Navigation</div>
                    <Nav.Link href='/dashboard'>
                        <BsHouseDoor /> Dashboard
                    </Nav.Link>
                    <Nav.Link href='/tabel'>
                        <BsTable /> Table
                    </Nav.Link>
                    <Nav.Link href='/product-dashboard'>
                        <BsBox /> Product
                    </Nav.Link>
                    <Nav.Link href='/post'>
                        <BsFilePost /> Post
                    </Nav.Link>
                    <Nav.Link href='/calender'>
                        <BsCalendar /> Calendar
                    </Nav.Link>
                    <Nav.Link href='/customer'>
                        <BsPeople /> Customer
                    </Nav.Link>
                    <Nav.Link href='/transaction'>
                        <BsCashStack /> Transaction
                    </Nav.Link>
                    <div className='setting'>Setting</div>
                    <Nav.Link href='/user'>
                        <BsPerson /> User
                    </Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default App;
