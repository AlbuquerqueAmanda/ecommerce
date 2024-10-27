import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Subscribe to our newsletter and get exclusive offers on your email:</h1>
        <div>
            <input type='email' placeholder='Your Email'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter;