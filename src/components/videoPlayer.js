import React from 'react';
import Slider from '../styles/videoPlayer.css';

const About = () => {

  return (
    <div className='video-player'>
      <iframe 
        width='100%' 
        height='100%' 
        src="https://www.youtube.com/embed/4nhj9vI_pUM?rel=0&amp;showinfo=0" 
        frameborder="0" 
        gesture="media" 
        allow="encrypted-media" 
        allowfullscreen="0">
      </iframe> 
    </div>
  )
}

export default About;