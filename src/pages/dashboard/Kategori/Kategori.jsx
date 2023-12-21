import { useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import SearchComponents from './Components/Search/SearchComponent';
import './Kategori.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import InfoMedia from './Components/Media/InfoMedia';

const Kategori = () => {
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
            <div className='kategori'>
                <Sidebar />
                <div className='kategori-produk-detail'>
                    <div className='kategori-add'>
                        <h2>Kategori Produk</h2>
                        <SearchComponents />
                        <Button onClick={handleShow}>
                            <AiOutlinePlusCircle />
                            Tambah Kategori
                        </Button>
                    </div>
                    <hr />
                    <div className='kategori-id'>
                        <p>No</p>
                        <p>Nama</p>
                        <p style={{ marginLeft: '100px' }}>Deskripsi</p>
                    </div>
                    <hr style={{ marginTop: '0px' }} />
                    <div className='data-kategori-produk'>
                        <div className='id-product'>
                            <p>01</p>
                        </div>

                        <div className='seri-kategori-product'>
                            <img
                                src='assets/img/kelas/kelas-2.png'
                                alt='smart-cart'
                            />
                            <p>Seri Hewan</p>
                        </div>
                        <div className='kategori-desc'>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className='edit-product-kategori'>
                            <FaRegEdit />
                            <FaRegTrashAlt />
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
                            <Form.Label>Nama Kategori</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Masukkan Nama Kategori'
                            />
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

export default Kategori;
