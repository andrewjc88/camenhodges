import React from 'react';
import Logo from '../img/logo.png';

const TitleBar = () => {

  const titleBar = {
    backgroundColor: '#1F1F1F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
  const LogoStyle = {
    margin: '4em 0em',
    width: '60%',
    maxWidth: '35em',
    alignSelf: 'center',
    filter: 'drop-shadow(0px 0px 4px #d6d3b8)',
  }

  return (
    <div>
      <img style={LogoStyle} src={Logo} alt="Camen Hodges Logo"/>
    </div>
  );
}

export default TitleBar;
