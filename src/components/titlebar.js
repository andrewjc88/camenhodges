import React from 'react';
import Logo from '../img/logo.png';

const TitleBar = () => {
  
  const titleBar = {
    backgroundColor: '#313131',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
  const LogoStyle = {
    margin: '4em',
    width: '50em',
    maxWidth: '88vw',
    alignSelf: 'center',
    filter: 'drop-shadow(0px 0px 4px #d6d3b8)',
  }

  return (
    <div>
      <div style={titleBar}>
        <img style={LogoStyle} src={Logo} alt="Camen Hodges Logo"/>
      </div>
    </div>
  );
}

export default TitleBar;
