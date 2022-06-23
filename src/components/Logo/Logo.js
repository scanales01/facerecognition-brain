import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './artificial-intelligence.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt shadow-4 bounce'>
        <div className='Tilt-inner pa3'>
          <img src={brain} alt='logo'/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;