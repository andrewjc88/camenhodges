import React from 'react';

const ComingSoon = () => {

  const coverStyle = {
    backgroundColor: 'black',
    position: 'fixed',
    height: '100%',
    alignContent: 'center',
    width: '100%',
    textAlign: 'center',
    zIndex: '1',
    overflowX: 'hidden',
    display: 'flex',
  }
  const contStyle = {
    margin: 'auto',
    width: '60%',
    bottomMargin: 'auto',
    maxWidth: '40em',
  }
  const logoStyle = {
    margin: 'auto',
    width: '100%',
  }
return (
    <div style={coverStyle}>
      <div style={contStyle}>
        <img style={logoStyle}  alt='coming soon logo'/>
        <h1>Coming Soon!</h1>
      </div>
    </div>
  )
}

export default ComingSoon; 
