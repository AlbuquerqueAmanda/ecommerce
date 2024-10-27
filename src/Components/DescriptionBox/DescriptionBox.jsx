import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (270)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis consequat nulla, vitae lobortis purus mattis dictum. Proin scelerisque arcu at venenatis porttitor. In sit amet mi ut est dapibus tempor et a nibh. Aenean et mi quam. Donec lacinia et nunc eu iaculis. Integer pharetra, metus at eleifend congue, augue turpis scelerisque sapien, ut mattis arcu leo et turpis. Quisque nec sollicitudin ipsum. Nunc commodo purus felis.</p>
        </div>
    </div>
  )
};

export default DescriptionBox;