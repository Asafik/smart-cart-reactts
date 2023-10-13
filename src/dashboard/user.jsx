import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function UserProfile() {
  // State untuk data pengguna
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '',
    newPassword: '',
  });

  // Fungsi untuk menangani perubahan data pengguna
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Fungsi untuk menyimpan perubahan data pengguna
  const saveChanges = () => {
    // Simpan perubahan data pengguna ke server (gunakan fetch atau axios)
    console.log('Data pengguna diperbarui:', userData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>User Profile</h1>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" value={userData.email} readOnly />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={userData.newPassword}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={saveChanges}>
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
