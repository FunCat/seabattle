import React, { Component } from 'react';
import './GameMap.css';
import TableRow from "./TableRow/TableRow";
import TitleRow from './TitleRow/TitleRow';

class GameMap extends Component {
  render() {
    return (
      <div className="container game-map">
        <div className="row">
          <div className="col-5">
            <div className="container p-0">
              <TitleRow letter=""/>
              <TableRow letter="A"/>
              <TableRow letter="B"/>
              <TableRow letter="C"/>
              <TableRow letter="D"/>
              <TableRow letter="E"/>
              <TableRow letter="F"/>
              <TableRow letter="G"/>
              <TableRow letter="H"/>
              <TableRow letter="I"/>
              <TableRow letter="J"/>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <TitleRow letter=""/>
            <TableRow letter="A"/>
            <TableRow letter="B"/>
            <TableRow letter="C"/>
            <TableRow letter="D"/>
            <TableRow letter="E"/>
            <TableRow letter="F"/>
            <TableRow letter="G"/>
            <TableRow letter="H"/>
            <TableRow letter="I"/>
            <TableRow letter="J"/>
          </div>
        </div>
      </div>
    );
  }
}

export default GameMap;
