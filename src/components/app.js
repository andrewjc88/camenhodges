import React, { Component } from 'react';
import '../styles/app.css';
import TitleBar from './titlebar'
import Accordion from './accordion';
import Carousel from './carousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Accordion />
        <Carousel /> 
      </div>
    );
  }
}

export default App;