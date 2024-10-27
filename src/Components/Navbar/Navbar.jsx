import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu('home')}}>
                <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}
            </li>
            <li onClick={() => {setMenu('tea')}}>
                <Link style={{ textDecoration: 'none' }} to='/tea'>Tea</Link>{menu==='tea'?<hr/>:<></>}
            </li>
            <li onClick={() => {setMenu('sweets')}}>
                <Link style={{ textDecoration: 'none' }} to='/sweets'>Sweets</Link>{menu==='sweets'?<hr/>:<></>}
            </li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''></img></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
};

export default Navbar;