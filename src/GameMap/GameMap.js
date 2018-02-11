import React, { Component } from 'react';
import './GameMap.css';

class GameMap extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="row p-0">
              <div className="col-2">
                <div className="row h-20"></div>
                <div className="row h-20">
                  <span className="text-right w-100">A</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">B</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">C</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">D</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">E</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">F</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">G</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">H</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">I</span>
                </div>
                <div className="row h-20">
                  <span className="text-right w-100">J</span>
                </div>
              </div>
              <div className="col">
                <div className="row h-20 w-20">
                  <span className="text-center w-100">1</span>
                </div>
                <div className="row h-20 w-20 bg-box">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20 w-20 bg-box">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
                <div className="row h-20">
                  <span className="w-100"></span>
                </div>
              </div>
              <div className="col">B</div>
              <div className="col">C</div>
              <div className="col">D</div>
              <div className="col">E</div>
              <div className="col">F</div>
              <div className="col">G</div>
              <div className="col">H</div>
              <div className="col">I</div>
              <div className="col">J</div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5"></div>
        </div>
      </div>
    );
  }
}

export default GameMap;
