import React from 'react';
import Slider from 'react-slick';

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css';

class ProjectsCarousel extends React.Component {
  render() {

    let settings = {
      swipeToSlide: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 9000,
      dots: true,
      adaptiveHeight: true,
      adaptiveWidth: true, 

    };

    return (
      <Slider {...settings} className='carousel'>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/400x200/?nature,water' alt="My Reads app Image"/>
          <a href="https://youtube.com">DealQuest App</a>
          <p className="SliderText">In this app I used Create React App with React Router to pull books from an API and display and sort them</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/400x200/?nature,water' alt="My Reads app Image"/>
          <a href="https://youtube.com">DealQuest App</a>
          <p className="SliderText">I used knockout.js, Foundation, google map JavaScript API and Groupon Ajax API to make a deal search tool.</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/400x200/?nature,water' alt="My Reads app Image"/>
          <a href="https://youtube.com">DealQuest App</a>
          <p className="SliderText">I used knockout.js, Foundation, google map JavaScript API and Groupon Ajax API to make a deal search tool.</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/400x200/?nature,water' alt="My Reads app Image"/>
          <a href="https://youtube.com">DealQuest App</a>
          <p className="SliderText">I used knockout.js, Foundation, google map JavaScript API and Groupon Ajax API to make a deal search tool.</p>
        </div>

      </Slider>
    );
  }
}

export default ProjectsCarousel;