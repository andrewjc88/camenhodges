import React from 'react';

const About = () => {

  const frameDiv = {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '25px',
    height: '0',
    // zIndex: '-1',
    margin: '0em 0em 0em 0em',
  }
  const iframeStyles = {
    position: 'absolute',
    border: 'none',
    autoPlay: 'true',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  }

  return (
    <div style={frameDiv}>
      <iframe 
        style={iframeStyles}
        src="https://player.vimeo.com/video/177007598" 
        webkitallowfullscreen 
        mozallowfullscreen 
        allowfullscreen>
      </iframe>
      {/* <iframe
        title='mainVid'
        style ={iframeStyles}
        src="https://www.youtube.com/embed/uFiAQehlBDw"
      >
      </iframe> */}
    </div>
  )

}

export default About;
