import React from 'react';
import Slider from 'react-slick';

import ProjImg1 from '../img/projThumbs/proj1.jpg'
import ProjImg2 from '../img/projThumbs/proj2.jpg'
import ProjImg3 from '../img/projThumbs/proj3.jpg'
import ProjImg4 from '../img/projThumbs/proj4.jpg'

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ProjectsCarousel extends React.Component {

  WhenClicked = (sel) => {
    this.props.setState()
  }

  render() {

    let settings = {
      // cneter: true,
      swipeToSlide: true,
      autoplay: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 9000,
      dots: false,
      arrows: true,

      // adaptiveHeight: true,
      // adaptiveWidth: true,
    };

    let ContainerStyle = {
      margin: '2em 0em 5em 0em',
      // zIndex: '-4',


    }
    const CarouselStyle = {
      // width: '30em',
      // height: '10em',
      // minHeight: '30em',
    }
    const ImgStyle = {
      width: 'auto',
      height: '40vh',
      backgorundSize: 'cover',
    }
    const labelStyle = {
      position: 'fixed',
      height: '1.5em',
      margin: 'auto',
      width: 'inherit',
      paddingTop: '.4em',
      // marginBottom: '2em',
      backgroundColor: 'rgba(0, 0, 0, 0.644)',
      bottom: '0em',

      color: 'white',
      textDecorationStyle: 'none',
      textDecoration: 'none',
    }

    return (
      <div style={ContainerStyle}>
        <Slider {...settings} style={CarouselStyle}>
          <a href="https://youtube.com">
            <h3 style={labelStyle} >Film move one</h3>

            <img style={ImgStyle}
              src={ProjImg1}
              alt="My Reads app"/>
          </a>
          <a
            href="https://youtube.com">
            <h3 style={labelStyle} >Film move one</h3>
            <img style={ImgStyle}
              src={ProjImg2}
              alt="My Reads app"/>
          </a>
          <a
            href="https://youtube.com">
            <h3 style={labelStyle} >Film move one</h3>
            <img style={ImgStyle}
              src={ProjImg3}
              alt="My Reads app"/>
          </a>
          <a
            href="https://youtube.com">
            <h3 style={labelStyle} >Film move one</h3>
            <img style={ImgStyle}
              src={ProjImg4}
              alt="My Reads app"/>
          </a>
        </Slider>
      </div>
    );
  }
}

export default ProjectsCarousel;
