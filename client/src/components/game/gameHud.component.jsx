import React, { Component } from 'react'
import { render } from 'react-dom'

import GameButton from './gameButton.component.jsx'
import FigureBox from './figureBox.component.jsx'
import { roundMagic } from '../helpers/formatHelpers.js'
import { Link } from 'react-router-dom'

export default class GameHud extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="game-hud">
        <Link id="bullshit-link" to="/home">
          <GameButton name="Back" stage={this.props.figures.stage}/>
        </Link>
        <GameButton name="Buy" handleClick={this.props.buy} stage={this.props.figures.stage}/>
        <GameButton name="Sell" handleClick={this.props.sell} stage={this.props.figures.stage}/>
        <FigureBox name="Share Price" figure={roundMagic.round(this.props.figures.sharePrice, 4) || 0}/>
        <FigureBox name="Cash" figure={roundMagic.roundToKString(this.props.figures.cash, 2) || 0}/>
        <FigureBox name="Equity" figure={roundMagic.roundToKString(this.props.figures.equity) || 0}/>
        <FigureBox name="Change" figure={roundMagic.round(this.props.figures.change) || 0}/>
        <FigureBox name="Net Worth" figure={roundMagic.roundToKString(this.props.figures.netWorth) || 0}/>
      </div>
    )
  }
}

// <Link id="urmumm8" to="/home">
//   <GameButton name="Back" stage={this.props.figures.stage}/>
// </Link>
