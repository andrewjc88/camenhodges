import React, { Component } from 'react';
import '../styles/app.css';
import TitleBar from './titlebar'
import AppAccordion from './appAccordion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <AppAccordion />
      </div>
    );
  }
}

export default App;