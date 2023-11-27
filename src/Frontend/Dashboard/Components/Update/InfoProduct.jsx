import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/infoproduct.css';

const InfoProduct = () => {
    return (
        <div className='info-product'>
            <Row>
                <Col sm={8}></Col>
                <Col>
                    <div className='empty-space'></div>
                </Col>
            </Row>
            <form>
                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='productName'>Nama Produk:</label>
                    </Col>
                    <Col sm={6}>
                        <input
                            type='text'
                            className='form-control no-border-radius-right'
                            id='productName'
                            placeholder='Masukkan nama produk'
                        />
                    </Col>
                </Row>

                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='productSku'>SKU:</label>
                    </Col>
                    <Col sm={6}>
                        <input
                            type='text'
                            className='form-control no-border-radius-right'
                            id='productSku'
                            placeholder='Masukkan SKU'
                        />
                    </Col>
                </Row>

                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='productBarcode'>Barcode:</label>
                    </Col>
                    <Col sm={6}>
                        <input
                            type='text'
                            className='form-control no-border-radius-right'
                            id='productBarcode'
                            placeholder='Masukkan Barcode'
                        />
                    </Col>
                </Row>

                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='productDescription'>Deskripsi:</label>
                    </Col>
                    <Col sm={6}>
                        <textarea
                            className='form-control no-border-radius-right'
                            id='productDescription'
                            rows='3'
                            placeholder='Masukkan deskripsi produk'
                        />
                    </Col>
                </Row>
            </form>

            <div className='info-button-save'>
                <button className='custom-button'>Simpan</button>
                <button className='custom-button'>Simpan & Pratinjau</button>
            </div>
        </div>
    );
};

export default InfoProduct;
