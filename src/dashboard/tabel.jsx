import React from 'react';
import Table from 'react-bootstrap/Table';
import Sidebar from '../components/Sidebar';

const TablePage = () => {
    const data = [
        { id: 1, name: 'Item 1', price: 10.99 },
        { id: 2, name: 'Item 2', price: 19.99 },
        { id: 3, name: 'Item 3', price: 5.99 },
        { id: 4, name: 'Item 4', price: 14.99 },
        { id: 5, name: 'Item 5', price: 8.99 },
    ];

    return (
        <>
            <div>
                <Sidebar />
                <h1>Table Page</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default TablePage;
