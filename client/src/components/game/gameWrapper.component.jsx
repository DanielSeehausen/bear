import React, { Component } from 'react'
import { render } from 'react-dom'

import GameHud from './gameHud.component.jsx'
import GameGraph from './gameGraph.component.jsx'
import GameButton from './gameButton.component.jsx'
import { dateMagic, roundMagic } from '../helpers/formatHelpers.js'

export default class GameWrapper extends Component {
  constructor() {
    super()
    this.state = {
      stage: "loading",
      startingCapital: null,
      cash: null,
      equity: null,
      netWorth: null,
      change: null,
      shareCount: null,
      sharePrice: null,
      action: null, //whether they are buying or selling on on this round
      data: null,
      company: null,
      ticker: null,
      yearRange: null,
      sharePriceMin: Infinity,
      sharePriceMax: Number.NEGATIVE_INFINITY,
      currIdx: null
    }
    this.mountRandomStock = this.mountRandomStock.bind(this)
    this.startGame = this.startGame.bind(this)
    this.endGame = this.endGame.bind(this)
    this.appraise = this.appraise.bind(this)
    this.buy = this.buy.bind(this)
    this.sell = this.sell.bind(this)
    this.tick = this.tick.bind(this)
  }

  mountRandomStock(stock) {
    console.log("Mounting: ", stock.company_name)
    let yearRange = dateMagic.getYearRange(stock.time_values)
    let min = Infinity
    let max = Number.NEGATIVE_INFINITY
    let randomStockData = stock.price_values.map((val, idx) => {
      if (val < min) min = val
      if (val > max) max = val
      return {date: dateMagic.getSmallDate(stock.time_values[stock.time_values.length-idx-1]), sharePrice: roundMagic.round(val, 4)}
    })
    this.setState({
      data: randomStockData,
      sharePrice: randomStockData[0].pv,
      stage: "pregame",
      company: stock.company_name,
      ticker: stock.ticker,
      yearRange: yearRange,
      sharePriceMin: min,
      sharePriceMax: max,
    })
  }

  componentWillMount() {
    $.getJSON("http://localhost:3000/game_rounds/DEFAULT").then((msg) => {
      let randomStock = msg.msg_data[Math.floor(Math.random()*msg.msg_data.length)]
      this.setState({
        startingCapital: randomStock.game_round_config.starting_capital,
        cash: randomStock.game_round_config.starting_capital,
        equity: 0,
        netWorth: randomStock.game_round_config.starting_capital,
        change: 0,
        shareCount: 0
      })
      this.mountRandomStock(randomStock)
    }, (err) => console.error(err, "UNABLE TO FETCH DEFAULT GAME DATA FROM API!"))
  }

  startGame() {
    //start game with first shareprice to ensure they cant trade on null
    if (this.state.stage !== "pregame") return
    this.setState({
      stage: "active",
      currIdx: 0,
    })
    console.log("game starting")
    let self = this
    let gameLoop = setInterval(() => {
      let nextVals = self.state.data[self.state.currIdx]
      if (!nextVals) {
        self.tick(self.state.sharePrice, true)
        clearInterval(gameLoop)
      } else {
        self.tick(nextVals)
      }
    }, 10)
  }

  endGame() {
    if (this.state.stage !== "active") return
    this.setState({
      stage: "postgame"
    })
  }

  buy(sharePrice) {
    console.log("buy")
    if (this.state.stage !== "active") return
    this.setState({
      cash: this.state.cash % sharePrice,
      shareCount: this.state.shareCount + Math.floor(this.state.cash / sharePrice)
    })
  }

  sell(sharePrice) {
    console.log("sell")
    if (this.state.stage !== "active") return
    this.setState({
      cash: this.state.cash + (this.state.shareCount * sharePrice),
      shareCount: this.state.shareCount + Math.floor(this.state.cash / sharePrice)
    })
  }

  appraise(movement, next, over) {
    let newEquity = this.state.equity + (this.state.equity * movement)
    this.setState({
      equity: newEquity,
      sharePrice: next,
      change: this.state.cash + newEquity,
      action: null,
  currIdx: this.state.currIdx + 1
    })
    if (over) {
      this.setState({
        stage: "Game Ended"
      })
    }
  }

  tick(nextVals, over=false) {
    if (over) {
      debugger
      var last = this.state.data[this.state.currIdx-1].sharePrice
      var next = false
    } else {
      var last = this.state.data[this.state.currIdx].sharePrice
      var next = nextVals.sharePrice
    }
    let movement = (next == 0) ? 0 : next/last
    if (this.state.action === "buy") {
      buy(last)
    } else if (this.state.action === "sell") {
      sell(last)
    }
    this.appraise(movement, next, over)
  }

  //TODO can combine into a trade(action) function and pass one
  flagBuy() {
    if (this.state.stage !== "active") return
    this.setState({
      action: "buy"
    })
  }

  flagSell() {
    if (this.state.stage !== "active") return
    this.setState({
      action: "sell"
    })
  }

  render() {
    let figures = Object.assign({}, this.state)
    const title = `${this.state.ticker}: ${this.state.company}`
    return (
      <div id="game-wrapper">
        <GameHud id="game-hud" figures={figures} buy={this.buy} sell={this.sell}/>
        {this.state.company ? <h1 id="graph-title">{title}</h1> : null}
        {this.state.yearRange ? <h2 id="graph-title-years">{this.state.yearRange}</h2> : null}
        <div id="game-graph-wrapper">
          {this.state.stage === "active" ? <GameGraph data={this.state.data.slice(0, this.state.currIdx)} min={this.state.sharePriceMin} max={this.state.sharePriceMax} range={this.state.sharePriceMax - this.state.sharePriceMin}/> : <GameButton name="Start Game" handleClick={this.startGame} /> }
        </div>
      </div>
    )
  }
}
