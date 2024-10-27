import React from 'react';
import './Hero.css';
import hero_image from '../Assets/hero_image.jpg';

const Hero = () => {
  return (
    <div className='hero'>
        <p>Tea Shop</p>
        <img src={hero_image} alt="" />
    </div>
  )
}

export default Hero;