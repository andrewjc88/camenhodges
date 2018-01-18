import React from 'react';
import Slider from 'react-slick';

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ProjectsCarousel extends React.Component {
  render() {

    let settings = {
      // cneter: true,
      swipeToSlide: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 9000,
      dots: true,
      arrows: false,

      // adaptiveHeight: true,
      // adaptiveWidth: true, 
    };

    let ContainerStyle = {
      margin: '-3em 0em 4em 0em',
      zIndex: '-4',

    }
    const CarouselStyle = {
      // width: '30em',
      // height: '10em',
      // minHeight: '30em',
    }
    const ImgStyle = {
      width: '100%',
    }
    const labelStyle = {
      position: 'fixed',

      zIndex: '1',
      marginTop: '2em',
      backgroundColor: 'rgba(0, 0, 0, 0.644)',
      // backgroundSize: '100% 100%',
      // margin: 'auto',
      // padding: '1em auto',
      color: 'white',
      padding:'.5em 2em',
      textDecorationStyle: 'none',
      textDecoration: 'none',
    }

    return (
      <div style={ContainerStyle}>
        <Slider {...settings} style={CarouselStyle}>
          <a
            href="https://youtube.com">
            <h2 style={labelStyle} >Film move one</h2>
            <img style={ImgStyle} 
              src= 'https://source.unsplash.com/I1ASdgphUH4/600x800' 
              alt="My Reads app"/>
          </a>
          <a
            href="https://youtube.com">
            <h2 style={labelStyle} >Film move one</h2>
            <img style={ImgStyle} 
              src= 'https://source.unsplash.com/zh7GEuORbUw/600x800' 
              alt="My Reads app"/>
          </a>
          <a
            href="https://youtube.com">
            <h2 style={labelStyle} >Film move one</h2>
            <img style={ImgStyle} 
              src= 'https://source.unsplash.com/qDkso9nvCg0/600x800' 
              alt="My Reads app"/>
          </a>
          <a
            href="https://youtube.com">
            <h2 style={labelStyle} >Film move one</h2>
            <img style={ImgStyle} 
              src= 'https://source.unsplash.com/epcsn8Ed8kY/600x800' 
              alt="My Reads app"/>
          </a>
        </Slider>
      </div>
    );
  }
}

export default ProjectsCarousel;