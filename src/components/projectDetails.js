import React from 'react';
// import Gallery from 'react-grid-gallery';
// import styles from 'react-sleek-photo-gallery/dist/style.css';

import Img1 from '../img/projThumbs/proj1.jpg';
import Img2 from '../img/projThumbs/proj2.jpg';
import Img3 from '../img/projThumbs/proj3.jpg';
import Img4 from '../img/projThumbs/proj4.jpg';

const ProjectDetails = () => {


  const containerStyles = {

    "maxHeight": '40em',
    "margin": '0em',
    "marginBottom": "8em",
    // backgroundColor: '#1F1F1F',

  }
  const header = {
    "padding": ".5vw",
    "height": "100%",
    "fontSize": "0",
    "display": "flex",
    "MsFlexWrap": "wrap",
    "MsFlexDirection": "column",
    "WebkitFlexFlow": "row wrap",
    "flexFlow": "row wrap",
    // "margin": "2em 2em
    "marginBottom": "2em"
  }
  const imgDiv = {
    "WebkitBoxFlex": "auto",
    "MsFlex": "auto",
    "flex": "auto",
    "width": "200px",
    "height": "100px",
    "margin": "0vw"
  }
  const img = {
    "width": "100%",
    "height": "auto",
    "backgroundPosition": 'hide',
    "overflow": "hide",
  }
  // const @media screen and (max-width: 400px) = {
  //   "__expression__": "screen and (max-width: 400px)",
  //   "header_div": {
  //     "margin": "0"
  // }

  return (


    <div style={containerStyles}>
      <h2>Project Name Stuff</h2>
      <p>If there is one thing kids love more than eating pizza, it’s being able to make it themselves </p>
      <div style={header}>
        <div style={imgDiv}>
          <img style={img} src={Img1}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img2}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img3}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img4}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img1}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img2}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img3}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img4}/>
        </div>
        <div style={imgDiv}>
          <img style={img} src={Img1}/>
        </div>
      </div>

    </div>
  )
}

export default ProjectDetails;
