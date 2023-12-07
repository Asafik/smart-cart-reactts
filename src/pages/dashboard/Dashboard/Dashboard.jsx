// App.js

import './dashboard.css';
import Sidebar from '../Components/Sidebar/Sidebar';

const App = () => {
    return (
        <div className='dashboard-page'>
            <Sidebar />
            <p>Selamat Datang Di Smart Card-Admin Dashboard!</p>

            <div className='image-container'>
                <div className='image-wrapper'>
                    <img
                        src='assets/img/icon/box.png'
                        alt='Image 1'
                        className='dashboard-image'
                    />
                    <div className='text-container'>
                        <p>25</p>
                        <p>Produk</p>
                    </div>
                </div>

                <div className='image-wrapper'>
                    <img
                        src='assets/img/icon/user-new.png'
                        alt='Image 2'
                        className='dashboard-image'
                    />
                    <div className='text-container'>
                        <p>15</p>
                        <p>Pelanggan</p>
                    </div>
                </div>

                <div className='image-wrapper'>
                    <img
                        src='assets/img/icon/shoppingcart.png'
                        alt='Image 3'
                        className='dashboard-image'
                    />
                    <div className='text-container'>
                        <p>18</p>
                        <p>Pesanan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
