import React from 'react';
import Logo from '../img/logo.png';
import '../styles/titlebar.css';

const TitleBar = () => {
  return (
    <div>
      <div className='title-bar'>
        <img className='App-logo' src={Logo} alt="Camen Hodges Logo"/>
      </div>
    </div>
  )
}

export default TitleBar;
