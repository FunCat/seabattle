import React, { Component } from 'react';
import './TitleCell.css';

class TitleCell extends Component {
  render() {
    return (
      <div className="col-2 h-20 text-right">
        <div>{this.props.letter}{this.props.number}</div>
      </div>
    );
  }
}

export default TitleCell;
