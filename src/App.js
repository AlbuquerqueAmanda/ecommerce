import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import tea_banner from './Components/Assets/banner_tea.jpg';
import sweets_banner from './Components/Assets/banner_sweets.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/tea' element={<ShopCategory banner={tea_banner} category='tea'/>}/>
        <Route path='/sweets' element={<ShopCategory banner={sweets_banner} category='sweets'/>}/>
        <Route path='/product' element={<Product></Product>}>
          <Route path=':productId' element={<Product></Product>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/login' element={<LoginSignup></LoginSignup>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
