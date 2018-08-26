import React, { Component } from 'react';
import '../app.css';
import TitleBar from './titlebar'
import Accordion from './accordion';
import Carousel from './carousel';
import ComingSoon from './comingSoon';

class App extends Component {
  state = {
    deployed: false,
    projDat: [
      {
        title: 'Project one',
        imges: '/img/projs/proj1',
        thumb: '/img/projThumbs/proj1.jpg',
        vidUrl: 'https://www.youtube.com/watch?v=4nhj9vI_pUM',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Project one',
        imges: '/img/projs/proj1',
        thumb: '/img/projThumbs/proj1.jpg',
        vidUrl: 'https://www.youtube.com/watch?v=4nhj9vI_pUM',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Project one',
        imges: '/img/projs/proj1',
        thumb: '/img/projThumbs/proj1.jpg',
        vidUrl: 'https://www.youtube.com/watch?v=4nhj9vI_pUM',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Project one',
        imges: '/img/projs/proj1',
        thumb: '/img/projThumbs/proj1.jpg',
        vidUrl: 'https://www.youtube.com/watch?v=4nhj9vI_pUM',
        descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ]
  }

  componentWillMount() {
    let deployed;
    if (window.location.href.includes("http://localhost:3000/")) {
      deployed = false;
      console.log('This site is not deployed')
    } else {
      deployed = true;
      console.log('This site is deployed')
    }
    this.setState({ deployed })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.deployed === true && <ComingSoon />}
          <TitleBar />
          <Accordion />
          <Carousel />
          {/* <div>
            <img
              className='instaStyle'
              src={InstaLogo}
              alt="Instagram link"/>
          </div> */}

          <a href="http://www.instagram.com">
            <div className="instaStyle"/>
          </a>

      </div>
    );
  }
};

export default App;
