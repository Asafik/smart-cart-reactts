import React from 'react';

const PDFView = () => {
    const googleDriveFileId = '19n2_uKAKi1KlplL43Dc3d4EZG55Uar5j';

    return (
        <div>
            <iframe
                title='PDF Viewer'
                width='100%'
                height='500px'
                src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
            ></iframe>
        </div>
    );
};

export default PDFView;
