import React, { Component } from 'react';
import '../app.css';
import TitleBar from './titlebar'
import Accordion from './accordion';
import Carousel from './carousel';


class App extends Component {
  state = {
    deployed: false
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
        {this.state.deployed === false } ? {
          <ComingSoon/>
        } : 
        <TitleBar />
        <Accordion />
        <Carousel /> 
      </div>
    );
  }
}

export default App;