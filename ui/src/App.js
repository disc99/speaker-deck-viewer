import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './SpeackerDeckSlider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider/>
      </div>
    );
  }
}

export default App;
