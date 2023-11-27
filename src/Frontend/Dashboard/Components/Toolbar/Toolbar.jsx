// ToolbarDeskripsi.jsx

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaListOl,
    FaListUl,
    FaImage,
} from 'react-icons/fa';
import './ToolbarDeskripsi.css'; // Import file CSS untuk styling

class ToolbarDeskripsi extends React.Component {
    // Fungsi untuk menangani tombol bold
    handleBold = () => {
        document.execCommand('bold', false, null);
    };

    // Fungsi untuk menangani tombol italic
    handleItalic = () => {
        document.execCommand('italic', false, null);
    };

    // Fungsi untuk menangani tombol underline
    handleUnderline = () => {
        document.execCommand('underline', false, null);
    };

    // Fungsi untuk menangani tombol numbering
    handleNumbering = () => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const olElement = document.createElement('ol');
        const liElement = document.createElement('li');
        liElement.innerHTML = '&nbsp;';
        olElement.appendChild(liElement);
        range.insertNode(olElement);
    };

    // Fungsi untuk menangani tombol bullets
    handleBullets = () => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const ulElement = document.createElement('ul');
        const liElement = document.createElement('li');
        liElement.innerHTML = '&nbsp;';
        ulElement.appendChild(liElement);
        range.insertNode(ulElement);
    };

    // Fungsi untuk menangani tombol image
    handleImage = (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file && file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file);
            document.execCommand('insertImage', false, imageUrl);
        }

        // Mengosongkan nilai input untuk memungkinkan pengguna mengunggah gambar yang sama
        fileInput.value = null;
    };
    render() {
        return (
            <div className='toolbar-deskripsi-container'>
                <p>Deskripsi</p>
                <div className='button-toolbar'>
                    <ButtonToolbar>
                        <Button
                            className='toolbar-button-toolbar'
                            variant='outline-secondary'
                            onClick={this.handleBold}
                        >
                            <FaBold />
                        </Button>
                        <Button
                            className='toolbar-button-toolbar'
                            variant='outline-secondary'
                            onClick={this.handleItalic}
                        >
                            <FaItalic />
                        </Button>
                        <Button
                            className='toolbar-button-toolbar'
                            variant='outline-secondary'
                            onClick={this.handleUnderline}
                        >
                            <FaUnderline />
                        </Button>
                        <Button
                            className='toolbar-button-toolbar'
                            variant='outline-secondary'
                            onClick={this.handleNumbering}
                        >
                            <FaListOl />
                        </Button>
                        <Button
                            className='toolbar-button-toolbar'
                            variant='outline-secondary'
                            onClick={this.handleBullets}
                        >
                            <FaListUl />
                        </Button>
                        <label
                            htmlFor='imageInput'
                            style={{
                                display: 'none',
                            }}
                        >
                            <input
                                id='imageInput'
                                type='file'
                                accept='image/*'
                                onChange={this.handleImage}
                            />
                        </label>
                        <Button
                            className='toolbar-button-toolbar'
                            variant='outline-secondary'
                            as='span'
                            onClick={() =>
                                document.getElementById('imageInput').click()
                            }
                        >
                            <FaImage />
                        </Button>
                    </ButtonToolbar>
                </div>

                <div className='deskripsi-input-container'>
                    <div contentEditable='true' className='deskripsi-input' />
                </div>
            </div>
        );
    }
}

export default ToolbarDeskripsi;
