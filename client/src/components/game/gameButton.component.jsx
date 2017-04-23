import React, { Component } from 'react'
import { render } from 'react-dom'

export default class GameButton extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="game-button" onClick={this.props.handleClick}>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
