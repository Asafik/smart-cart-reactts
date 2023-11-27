import Sidebar from '../Components/Sidebar';
import ToggleSwitch from './Components/Toggle/ToggleSwitch';

import './css/listproduct.css';
import { FaRegEdit } from 'react-icons/fa';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import SearchComponent from './Components/search/SearchComponent';
import StatusProduct from './Components/status/StatusProduct';
import StockProduct from './Components/stock/StockProduct';
import DaftarNomorProduct from './Components/Nomor/DaftarNomorProduct';
import Export from './Components/Export/Export';

const Listproduct = () => {
    return (
        <div className='list-product'>
            <Sidebar />

            <div className='list-product-detail'>
                <h5>List Produk</h5>
                <div className='container'>
                    <div className='search'>
                        <SearchComponent />
                    </div>
                    <StatusProduct />
                    <StockProduct />
                    <DaftarNomorProduct />
                    <Export />
                </div>

                <hr />
                <div className='list-product-container'>
                    <div className='no'>
                        <p>No</p>
                    </div>
                    <div className='text-product'>
                        <p>Produk</p>
                    </div>

                    <p>Penjualan</p>

                    <div className='chevron-icons'>
                        <FaChevronUp />
                        <FaChevronDown />
                        <p>Status</p>
                    </div>

                    <p>SKU</p>
                    <div className='chevron-icons'>
                        <FaChevronUp />
                        <FaChevronDown />
                        <p>Stok</p>
                    </div>

                    <div className='chevron-icons'>
                        <FaChevronUp />
                        <FaChevronDown />
                        <p>Qty</p>
                    </div>
                </div>

                <hr
                    style={{
                        height: '2.5px',
                        marginTop: '-3px',
                    }}
                />

                <div className='data-product'>
                    <div className='nomor-product'>
                        <p>01</p>
                    </div>
                    <div className='seri-product'>
                        <img src='assets/img/kelas/kelas-1.png' alt='' />
                        <p>Seri Hewan</p>
                    </div>

                    <div className='total-penjualan'>
                        <p>102</p>
                    </div>
                    <div className='status-product'>
                        <p>Pusblish</p>
                    </div>
                    <div className='sku-product'>
                        <p>32312</p>
                    </div>
                    <div className='stok-ready'>
                        <ToggleSwitch />
                    </div>

                    <div className='total-qty'>
                        <p>123</p>
                    </div>

                    <div className='edit'>
                        <Link to='/update-produk'>
                            <FaRegEdit />
                        </Link>
                    </div>
                </div>

                <div className='data-product'>
                    <div className='nomor-product'>
                        <p>02</p>
                    </div>
                    <div className='seri-product'>
                        <img src='assets/img/kelas/kelas-1.png' alt='' />
                        <p>Seri Hewan</p>
                    </div>

                    <div className='total-penjualan'>
                        <p>102</p>
                    </div>
                    <div className='status-product'>
                        <p>Pusblish</p>
                    </div>
                    <div className='sku-product'>
                        <p>32312</p>
                    </div>
                    <div className='stok-ready'>
                        <ToggleSwitch />
                    </div>

                    <div className='total-qty'>
                        <p>123</p>
                    </div>

                    <div className='edit'>
                        <Link to='/update-produk'>
                            <FaRegEdit />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listproduct;
