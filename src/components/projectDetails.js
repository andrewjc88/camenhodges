import React from 'react';
import Gallery from 'react-photo-gallery';

const Photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/800x599', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
];

const containerStyles ={
  // height: '10em',
  margin: '2em 0em',
  // backgroundColor: '#1F1F1F',
  
}
 
const galleryStyles = {
  // width: '90%',
  // height: '100%',
  maxHeight: '20em',
  // maxWidth: '50em',
  // margin: '0 auto',
}

const ProjectDetails = () => {
  return (
    
    
    <div style={containerStyles}>
      <h2>Project Name Stuff</h2>
      <p>If there is one thing kids love more than eating pizza, it’s being able to make it themselves </p>
      <Gallery style={galleryStyles} photos={Photos} />
    </div>
  )
}

export default ProjectDetails;