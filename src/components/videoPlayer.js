import React from 'react';

const About = () => {

  const frameDiv = {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '25px',
    height: '0',
    zIndex: '0',
    margin: '-3.1em 0em 0em 0em',
  }
  const iframeStyles = {
    position:'absolute',
    border: 'none',
    autoPlay: 'true',
    top:'0',
    left:'0',
    width:'100%',
    height:'100%',
  }

  return (
    <div style={frameDiv}>
      <iframe 
        title='mainVid'
        style ={iframeStyles}
        src="https://www.youtube.com/embed/4nhj9vI_pUM?rel=0&amp;showinfo=0" 
      >
      </iframe> 
    </div>
  )

}

export default About;