import React, { Component } from 'react'
import { render } from 'react-dom'

import GameHud from './gameHud.component.jsx'
import Game from './game.component.jsx'

export default class GameWrapper extends Component {
  constructor() {
    super()
    this.state = {
      stage: "pregame",
      startingCapital: null,
      cash: null,
      equity: null,
      netWorth: null,
      gains: null,
      shareCount: null,
      sharePrice: null,
    }
    this.stockData = null

    this.startGame = this.startGame.bind(this)
    this.endGame = this.endGame.bind(this)
    this.buy = this.buy.bind(this)
    this.sell = this.sell.bind(this)
    this.tick = this.tick.bind(this)
  }

  componentWillMount() {
    $.getJSON("http://localhost:3000/game_rounds/DEFAULT").then((msg) => {
      this.stockData = msg.msg_data
      this.setState({
        startingCapital: msg.msg_data[0].game_round_config.starting_capital,
        cash: msg.msg_data[0].game_round_config.starting_capital,
        equity: 0,
        netWorth: msg.msg_data[0].game_round_config.starting_capital,
        gains: 0,
        shareCount: 0,
      })
      debugger
    }, (err) => console.error(err, "UNABLE TO FETCH DEFAULT GAME DATA FROM API!"))
  }

  startGame(sharePrice) {
    //start game with first shareprice to ensure they cant trade on null
    if (this.state.stage !== "pregame") return
    this.setState({
      sharePrice: sharePrice,
      stage: "active"
    })
  }

  endGame() {
    if (this.state.stage !== "active") return
    this.setState({
      stage: "postgame"
    })
  }

  buy(sharePrice) {
    if (this.state.stage !== "active") return
    this.setState({
      cash: this.state.cash % sharePrice
      shareCount: this.state.shareCount + Math.floor(this.state.cash / sharePrice)
    })
  }

  sell(sharePrice) {
    if (this.state.stage !== "active") return
    this.setState({
      cash: this.state.cash + (this.state.shareCount * sharePrice)
      shareCount: this.state.shareCount + Math.floor(this.state.cash / sharePrice)
    })
  }

  appraise(movement, next) {
    let newEquity = this.state.equity + (this.state.equity * movement)
    this.setState({
      equity: newEquity,
      sharePrice: next,
      gains: this.state.cash + newEquity
    })
  }

  tick(last, next, trade=false) {
    let movement = (next == 0) ? 0 : next/last
    if (trade === "buy") {
      buy(last)
    } else if (trade === "sell") {
      sell(last)
    }
    appraise(movement, next)
  }

  render() {
    return (
      <div id="game-wrapper">
        <GameHud id="game-hud"/>
        <Game id="graph"/>
      </div>
    )
  }
}
