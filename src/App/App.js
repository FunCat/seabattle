import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import GameMap from '../GameMap/GameMap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GameMap />
      </div>
    );
  }
}

export default App;
