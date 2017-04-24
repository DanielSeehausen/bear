import React, { Component } from 'react'
import { render } from 'react-dom'

export default class GameButton extends Component {
  constructor() {
    super()
  }

  render() {
    let color = this.props.name === 'Back' ? "#992222" : this.props.stage === "active" ? "#00FFFF" : "#235555"
    return (
      <div id={this.props.name === 'Back' ? "back-button" : null} className="game-button" onClick={this.props.handleClick} style={{backgroundColor: `${color}`}}>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
