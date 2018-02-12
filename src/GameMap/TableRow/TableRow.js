import React, { Component } from 'react';
import './TableRow.css';
import TableCell from '../TableCell/TableCell';
import TitleCell from '../TitleCell/TitleCell';

class TableRow extends Component {
  render() {
    return(
      <div className="row">
        <TitleCell letter={this.props.letter} number="" />
        <TableCell letter={this.props.letter} number="0" />
        <TableCell letter={this.props.letter} number="1" />
        <TableCell letter={this.props.letter} number="2" />
        <TableCell letter={this.props.letter} number="3" />
        <TableCell letter={this.props.letter} number="4" />
        <TableCell letter={this.props.letter} number="5" />
        <TableCell letter={this.props.letter} number="6" />
        <TableCell letter={this.props.letter} number="7" />
        <TableCell letter={this.props.letter} number="8" />
        <TableCell letter={this.props.letter} number="9" />
      </div>
    );
  }
}

export default TableRow;
