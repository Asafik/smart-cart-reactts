import Sidebar from '../../Components/Sidebar/Sidebar';
import { Nav, Tab } from 'react-bootstrap';
import { FaRegBell, FaRegUser } from 'react-icons/fa';
import { CiLock } from 'react-icons/ci';

import Profile from '../Components/Profil/Profile';
import ChangePassword from '../Components/ChangePassword/ChangePassword';
import Notif from '../Components/Notif/Notif';
import './EditProfil.css';

const EditProfil = () => {
    return (
        <div className='dashboard-edit-profil'>
            <Sidebar />

            <div className='dashboard-edit-profil-detail'>
                <Tab.Container id='tabs' defaultActiveKey='tab1'>
                    <Nav className='row-reverse'>
                        <Nav.Item>
                            <Nav.Link
                                eventKey='tab1'
                                className='edit-profil-nav-link'
                            >
                                <FaRegUser /> Profile
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey='tab2'
                                className='edit-profil-nav-link'
                            >
                                <CiLock /> Keamanan
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey='tab3'
                                className='edit-profil-nav-link'
                            >
                                <FaRegBell /> Notifikasi
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='tab1'>
                            <Profile />
                        </Tab.Pane>
                        <Tab.Pane eventKey='tab2'>
                            <ChangePassword />
                        </Tab.Pane>
                        <Tab.Pane eventKey='tab3'>
                            <Notif />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
};

export default EditProfil;
