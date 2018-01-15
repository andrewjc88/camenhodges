import React from 'react';

const About = () => {

  const frameDiv = {
    margin: 'auto',
    // width: '100%',
    // height: '900px',
  }

  return (
    <div style={frameDiv}>
      <iframe 
        title='mainVid'
        width='99%' 
        height='400' 
        src="https://www.youtube.com/embed/4nhj9vI_pUM?rel=0&amp;showinfo=0" 
      >
      </iframe> 
    </div>
  )

}

export default About;