import React, { Component } from 'react'
import { render } from 'react-dom'

export default class FigureBox extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="figure-wrapper">
        <div className="figure-box">
          <h2>{this.props.name === "Change" ? `${this.props.figure}%` : `$${this.props.figure}`}</h2>
        </div>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}
