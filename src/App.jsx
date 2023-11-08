import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    About,
    Cekstatus,
    Home,
    Login,
    Product,
    Register,
    DetailProduct,
    Pemesanan,
    Pembayaran,
    CaraBayar,
    Selesai,
    Informasi,
    Koleksi,
    Bahasa,
    Notifikasi,
    Logout,
    Cart,
    Dashboard,
    Listproduct,
    AddProduct,
    Update,
} from './Frontend';

import './css/index.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/produk' Component={Product} />
                    <Route path='/detail-produk' Component={DetailProduct} />
                    <Route path='/cek-status' Component={Cekstatus} />
                    <Route path='/tentang-kami' Component={About} />
                    <Route path='/cart' Component={Cart} />
                    <Route path='/pemesanan' Component={Pemesanan} />
                    <Route path='/pembayaran' Component={Pembayaran} />
                    <Route path='/cara-bayar' Component={CaraBayar} />
                    <Route path='/selesai' Component={Selesai} />
                    <Route path='/informasi' Component={Informasi} />
                    <Route path='/koleksi' Component={Koleksi} />
                    <Route path='/bahasa' Component={Bahasa} />
                    <Route path='/notifikasi' Component={Notifikasi} />
                    <Route path='/logout' Component={Logout} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                    <Route path='/dashboard' Component={Dashboard}/>
                    <Route path='/list-produk' Component={Listproduct}/>
                    <Route path='/produk-baru' Component={AddProduct}/>
                    <Route path='/update-produk' Component={Update}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
