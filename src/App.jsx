import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Auth Page
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

//fronPage
import Home from './pages/Home/Home';
import Product from './pages/Product/Product/Product';
import DetailProduct from './pages/Product/DetailProduct/Product/DetailProduct';
import About from './pages/About/About';
import Cekstatus from './pages/Status/Cekstatus';
import Cart from './pages/Cart/Product/Cart';

//Dashboard Page
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
import AddProduct from './pages/dashboard/Add/Product/AddProduct';
import Listproduct from './pages/dashboard/List/Product/Listproduct';
import Update from './pages/dashboard/Update/Product/Update';
import EditProfil from './pages/dashboard/Profil/Edit/EditProfil';

//Profile Page
import Informasi from './pages/Profil/Informasi/Informasi';
import Bahasa from './pages/Profil/Bahasa/Bahasa';
import Notifikasi from './pages/Profil/Notifikasi/Notifikasi';
import Koleksi from './pages/Profil/Koleksi/Product/Koleksi';

//Pesan Page
import Pemesanan from './pages/Pesan/Pemesanan/Product/Pemesanan';
import Pembayaran from './pages/Pesan/Pembayaran/Product/Pembayaran';
import Selesai from './pages/Pesan/Selesai/Selesai';

//Petunjuk Pembayaran
import CaraBayar from './pages/Pesan/Petunjuk/Bayar/CaraBayar';
import CaraBayarBRI from './pages/Pesan/Petunjuk/Bayar/CaraBayarBRI';
import CaraBayarBCA from './pages/Pesan/Petunjuk/Bayar/CaraBayarBCA';
import CaraBayarMandiri from './pages/Pesan/Petunjuk/Bayar/CaraBayarMandiri';
import CaraBayarPermata from './pages/Pesan/Petunjuk/Bayar/CaraBayarPermata';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/produk' Component={Product} />
                    <Route path='/detail-produk' Component={DetailProduct} />
                    <Route path='/tentang-kami' Component={About} />
                    <Route path='/cek-status' Component={Cekstatus} />
                    <Route path='/dashboard' Component={Dashboard} />
                    <Route path='/produk-baru' Component={AddProduct} />
                    <Route path='/list-produk' Component={Listproduct} />
                    <Route path='/update-produk' Component={Update} />
                    <Route path='/edit-profile' Component={EditProfil} />
                    <Route path='/informasi' Component={Informasi} />
                    <Route path='/bahasa' Component={Bahasa} />
                    <Route path='/notifikasi' Component={Notifikasi} />
                    <Route path='/koleksi' Component={Koleksi} />
                    <Route path='/pemesanan' Component={Pemesanan} />
                    <Route path='/pembayaran' Component={Pembayaran} />
                    <Route path='/selesai' Component={Selesai} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                    <Route path='/cart' Component={Cart} />
                    <Route path='/petunjuk-bni' Component={CaraBayar} />
                    <Route path='/petunjuk-bri' Component={CaraBayarBRI} />
                    <Route path='/petunjuk-bca' Component={CaraBayarBCA} />
                    <Route
                        path='/petunjuk-mandiri'
                        Component={CaraBayarMandiri}
                    />
                    <Route
                        path='/petunjuk-permata'
                        Component={CaraBayarPermata}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
