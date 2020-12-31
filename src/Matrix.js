import React, { Component } from 'react';
import {pattern2} from './data'
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    console.log(vals)
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: pattern2
}