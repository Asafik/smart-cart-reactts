import { Nav, Tab } from 'react-bootstrap';

import Sidebar from '../../Components/Sidebar/Sidebar';
import InfoProduct from '../Components/Product/InfoProduct';
import InfoHarga from '../Components/Harga/InfoHarga';
import InfoMedia from '../Components/Media/InfoMedia';

import './update.css';

const Update = () => {
    return (
        <div className='update-product'>
            <Sidebar />

            <div className='update-product-detail'>
                <h5>Perbarui Produk</h5>
                {/* Tabs */}
                <Tab.Container id='tabs' defaultActiveKey='tab1'>
                    <Nav className='row-reverse'>
                        <Nav.Item>
                            <Nav.Link
                                eventKey='tab1'
                                className='custom-nav-link'
                            >
                                Infomasi Produk
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey='tab2'
                                className='custom-nav-link'
                            >
                                Harga
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey='tab3'
                                className='custom-nav-link'
                            >
                                Media
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='tab1'>
                            <InfoProduct />
                        </Tab.Pane>
                        <Tab.Pane eventKey='tab2'>
                            <InfoHarga />
                        </Tab.Pane>
                        <Tab.Pane eventKey='tab3'>
                            <InfoMedia />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
};

export default Update;
