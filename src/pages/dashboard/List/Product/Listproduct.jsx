import Sidebar from '../../Components/Sidebar/Sidebar';
import { useState } from 'react';
import './listproduct.css';
import { FaRegEdit } from 'react-icons/fa';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import SearchComponent from '../Components/Search/SearchComponent';
import StatusProduct from '../Components/Status/StatusProduct';
import StockProduct from '../Components/Stock/StockProduct';
import DaftarNomorProduct from '../Components/No/DaftarNomorProduct';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../Components/Media/InfoMedia';

import Toggle from '../Components/Toggle/ToggleSwitch';
import { Button, Modal, Form } from 'react-bootstrap';
import InfoMedia from '../Components/Media/InfoMedia';

const Listproduct = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [deskripsi, setDeskripsi] = useState('');

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'bullet' }, { list: 'ordered' }],
            ['link'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'image',
        'list',
        'bullet',
        'indent',
        'link',
    ];

    return (
        <>
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
                        <Button onClick={handleShow}>
                            <AiOutlinePlusCircle />
                            Tambah Produk
                        </Button>
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
                            <Toggle />
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
            {/* Modal untuk Tambah Kategori */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Kategori</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId='formNama'>
                            <Form.Label>Nama Produk</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <Form.Group controlId='formDeskripsi'>
                            <Form.Label>Deskripsi</Form.Label>
                            <ReactQuill
                                theme='snow'
                                value={deskripsi}
                                onChange={setDeskripsi}
                                modules={modules}
                                formats={formats}
                                placeholder='Tambahkan deskripsi di sini...'
                            />
                        </Form.Group>

                        {/* Tambahkan class horizontal-inputs di sini */}
                        <div className='horizontal-inputs'>
                            {/* Input Harga */}
                            <Form.Group controlId='formHarga'>
                                <Form.Label className='from-label'>
                                    Harga
                                </Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>

                            {/* Input Harga Diskon */}
                            <Form.Group controlId='formHargaDiskon'>
                                <Form.Label className='from-label'>
                                    Harga Diskon
                                </Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>

                            {/* Input Kuantitas */}
                            <Form.Group controlId='formKuantitas'>
                                <Form.Label className='from-label'>
                                    Kuantitas
                                </Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                        </div>
                    </Form>

                    <InfoMedia />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='danger' onClick={handleClose}>
                        Tutup
                    </Button>
                    <Button variant='secondary'>Buang</Button>
                    <Button variant='warning' className='text-light'>
                        Simpan Ke darft
                    </Button>
                    <Button
                        variant='warning'
                        onClick={handleClose}
                        className='text-light'
                    >
                        Tambah Produk
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Listproduct;
