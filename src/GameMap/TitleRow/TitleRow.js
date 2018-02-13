import React, { Component } from 'react';
import './TitleRow.css';
import TitleCell from '../TitleCell/TitleCell';

class TitleRow extends Component {
  render() {
    return(
      <div className="row">
        <TitleCell letter={this.props.letter} number="" />
        <div className="col-1 h-20 text-center">
          <div>0</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>1</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>2</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>3</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>4</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>5</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>6</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>7</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>8</div>
        </div>
        <div className="col-1 h-20 text-center">
          <div>9</div>
        </div>
      </div>
    );
  }

}

export default TitleRow;
