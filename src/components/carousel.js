import React from 'react';
import Slider from 'react-slick';

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ProjectsCarousel extends React.Component {
  render() {

    let settings = {
      cneter: true,
      swipeToSlide: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 9000,
      dots: true,
      // adaptiveHeight: true,
      // adaptiveWidth: true, 
    };

    let ContainerStyle = {
      width: '85vw',
      margin: '4em auto',
    }
    const CarouselStyle = {
      // width: '30em',
      // height: 'auto',
      // minHeight: '30em',
    }
    const ImgStyle = {
      // width: '100%',
      // padding: '1em 0em',
      // margin: 'auto',
      // height: '5em',
    }

    return (
      <div style={ContainerStyle}>
        <Slider {...settings} style={CarouselStyle}>
          <div className='Slider'>
            <img style={ImgStyle} src='https://source.unsplash.com/400x200/?nature,water' alt="My Reads app"/>
            <a href="https://youtube.com">DealQuest App</a>
          </div>
          <div className='Slider'>
            <img className='SliderImg' src='https://source.unsplash.com/400x200/?nature,lakes' alt="My Reads app"/>
            <a href="https://youtube.com">DealQuest App</a>
          </div>
          <div className='Slider'>
            <img className='SliderImg' src='https://source.unsplash.com/400x200/?nature,hills' alt="My Reads app"/>
            <a href="https://youtube.com">DealQuest App</a>
          </div>
          <div className='Slider'>
            <img className='SliderImg' src='https://source.unsplash.com/400x200/?nature,trees' alt="My Reads app"/>
            <a href="https://youtube.com">DealQuest App</a>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ProjectsCarousel;