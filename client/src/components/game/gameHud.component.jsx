import React, { Component } from 'react'
import { render } from 'react-dom'

import GameButton from './gameButton.component.jsx'
import FigureBox from './figureBox.component.jsx'
import { roundMagic } from '../helpers/formatHelpers.js'

export default class GameHud extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="game-hud">
        <GameButton name="Buy" handleClick={this.props.buy}/>
        <GameButton name="Sell" handleClick={this.props.sell}/>
        <FigureBox name="Share Price" figure={roundMagic.round(this.props.figures.sharePrice, 4) || 0}/>
        <FigureBox name="Cash" figure={roundMagic.round(this.props.figures.cash, 2) || 0}/>
        <FigureBox name="Equity" figure={this.props.figures.equity || 0}/>
        <FigureBox name="Change" figure={this.props.figures.gains || 0}/>
        <FigureBox name="Net Worth" figure={this.props.figures.netWorth || 0}/>
      </div>
    )
  }
}
