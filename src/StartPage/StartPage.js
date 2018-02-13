import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './StartPage.css';

class StartPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row text-center">
            <div className="col-4"></div>
            <div className="col-4">
              <NavLink to="/game">
                <div className="play-btn w-100">START GAME</div>
              </NavLink>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;
