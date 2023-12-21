import './sidebar.css';
import { FaHome, FaList, FaSignOutAlt } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { Nav } from 'react-bootstrap';

const App = () => {
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
                        <img
                            src='assets/img/profil/kera.jpg'
                            alt='Your Image'
                        />
                        <span className='name'>Adminisator</span>
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
                            href='/kategori-produk'
                            className='kategori-produk'
                        >
                            <BiCategory className='kategori-produk-icon' />
                            Kategori Produk
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
