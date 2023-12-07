import React, { useState } from 'react';
import { CgExport } from 'react-icons/cg'; // Menggunakan ikon export dari CoreUI Icons
import PDFView from './PDFView';
import './Export.css'; // Impor file CSS terpisah

const Export = () => {
    const [showPDF, setShowPDF] = useState(false);

    const handleViewPDF = () => {
        // Ganti dengan URL atau path yang sesuai
        const pdfUrl =
            'https://drive.google.com/file/d/19n2_uKAKi1KlplL43Dc3d4EZG55Uar5j/view?usp=drive_link';

        // Buka PDFView di tab baru
        window.open(pdfUrl, '_blank');
    };

    return (
        <div>
            <button onClick={handleViewPDF} className='export-button'>
                <CgExport className='export-icon' />
                <span>Export</span>
            </button>

            {showPDF && <PDFView />}
        </div>
    );
};

export default Export;
