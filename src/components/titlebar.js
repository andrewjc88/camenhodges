import React from 'react';
import Logo from '../img/logo.png'
import '../styles/titlebar.css'

const TitleBar = () => {
  return (
    <div ClassName='title-bar'>
      <div ClassName='App-logo'>
        <img src={Logo} alt="Camen Hodges Logo"/>
      </div>
    </div>
  )
}

export default TitleBar;