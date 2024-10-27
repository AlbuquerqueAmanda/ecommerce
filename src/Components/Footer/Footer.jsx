import React from 'react';
import './Footer.css';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import logo_icon from '../Assets/logo_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo_icon} alt="" />
            <p>Tea Shop</p>
        </div>
        <ul className="footer-links">
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=''></img>
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt=''></img>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=''></img>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
};

export default Footer;