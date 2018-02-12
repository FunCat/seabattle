import React, { Component } from 'react';
import './TableCell.css';

class TableCell extends Component {
  render() {
    return(
      <div className="col-1 h-20 text-center">
        <div className="map-cell h-20"></div>
      </div>
    );
  }
}

export default TableCell;
