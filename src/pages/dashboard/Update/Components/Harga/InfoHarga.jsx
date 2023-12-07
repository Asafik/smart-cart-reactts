import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './infoharga.css';

const InfoHarga = () => {
    return (
        <div className='mt-4'>
            <form>
                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='productPrice'>Harga</label>
                    </Col>
                    <Col sm={4}>
                        <input
                            type='text'
                            className='form-control no-border-radius-right'
                            id='productPrice'
                            placeholder='Masukkan harga produk'
                        />
                    </Col>
                </Row>

                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='discountPrice'>Harga Diskon:</label>
                    </Col>
                    <Col sm={4}>
                        <input
                            type='text'
                            className='form-control no-border-radius-right'
                            id='discountPrice'
                            placeholder='Masukkan harga diskon produk'
                        />
                    </Col>
                </Row>
            </form>
            <div className='info-button-save-harga'>
                <button className='custom-button'>Simpan</button>
                <button className='custom-button'>Simpan & Pratinjau</button>
            </div>
        </div>
    );
};

export default InfoHarga;
