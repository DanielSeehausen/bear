import React, { Component } from 'react'
import { render } from 'react-dom'

import GameHud from './gameHud.component.jsx'
import GameGraph from './gameGraph.component.jsx'
import GameButton from './gameButton.component.jsx'
import { dateMagic, roundMagic } from '../helpers/formatHelpers.js'
import { ReferenceLine } from 'recharts'
import { seededStocks } from './stockSeedData.js'

<<<<<<< Updated upstream
=======
const defState = {
  stage: "loading",
  startingCapital: null,
  cash: null,
  equity: null,
  netWorth: null,
  change: null,
  shareCount: null,
  sharePrice: null,
  action: null,
  data: null,
  company: null,
  ticker: null,
  yearRange: null,
  sharePriceMin: Infinity,
  sharePriceMax: Number.NEGATIVE_INFINITY,
  currIdx: null,
  buyLine: null,
  transactionLines: [],
  allIn: false,
  lastInvestment: 0,
}

>>>>>>> Stashed changes
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
      action: null,
      data: null,
      company: null,
      ticker: null,
      yearRange: null,
      sharePriceMin: Infinity,
      sharePriceMax: Number.NEGATIVE_INFINITY,
      currIdx: null,
      buyLine: null,
      transactionLines: [],
    }
    this.allStockData = seededStocks
    this.mountRandomStock = this.mountRandomStock.bind(this)
    this.assignRandomStock = this.assignRandomStock.bind(this)
    this.startGame = this.startGame.bind(this)
    this.restart = this.restart.bind(this)
    this.endGame = this.endGame.bind(this)
    this.appraise = this.appraise.bind(this)
    this.buy = this.buy.bind(this)
    this.sell = this.sell.bind(this)
    this.flagBuy = this.flagBuy.bind(this)
    this.flagSell = this.flagSell.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
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

  assignRandomStock() {
    while (true) {
      let idx = Math.floor(Math.random()*this.allStockData.length)
      if (this.allStockData[idx].company_name !== this.state.company) {
        var randomStock = this.allStockData[idx]
        break
      }
    }
    this.setState({
      startingCapital: randomStock.game_round_config.starting_capital,
      cash: randomStock.game_round_config.starting_capital,
      equity: 0,
      netWorth: randomStock.game_round_config.starting_capital,
      change: 0,
      shareCount: 0
    })
    this.mountRandomStock(randomStock)
  }

  restart() {
    this.assignRandomStock()
  }

  componentWillMount() {
    // $.getJSON("http://localhost:3000/game_rounds/DEFAULT").then((msg) => {
    //   this.allStockData = msg.msg_data
    //   this.assignRandomStock()
    // }, (err) => console.error(err, "UNABLE TO FETCH DEFAULT GAME DATA FROM API!"))
    this.assignRandomStock()
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);

  }

  startGame() {
    //start game with first shareprice to ensure they cant trade on null
    if (this.state.stage === "Game Ended") this.restart()
    this.setState({
      stage: "active",
      currIdx: 0,
    })
    let self = this
    let gameLoop = setInterval(() => {
      if (self.state.currIdx >= self.state.data.length) {
        this.setState({stage: "Game Ended"})
        clearInterval(gameLoop)
      } else {
        let nextVal = self.state.data[self.state.currIdx].sharePrice
        self.tick(nextVal)
      }
    }, 20)
  }

  endGame() {
    if (this.state.stage !== "active") return
    this.setState({
      stage: "postgame"
    })
  }

  appraise(lastVal, nextVal) {
    let newEquity = this.state.shareCount*lastVal
    let oldNW = this.state.netWorth
    let newNW = Math.floor(this.state.cash + newEquity)
    this.setState({
      sharePrice: nextVal,
      change: 100*(newNW/this.state.startingCapital),
      action: null,
      currIdx: this.state.currIdx + 1,
      netWorth: newNW,
      equity: newEquity,
    })
  }

  buy(sharePrice) {
    if (this.state.stage !== "active") return
    let purchasedShares = Math.floor(this.state.cash / sharePrice)
    this.setState({
      cash: this.state.cash % sharePrice,
      shareCount: this.state.shareCount + purchasedShares,
      equity: this.state.shareCount * sharePrice
    })
  }

  sell(sharePrice) {
    if (this.state.stage !== "active") return
    let profit = Math.ceil(this.state.shareCount * sharePrice)
    this.setState({
      cash: this.state.cash + profit,
      shareCount: 0,
      equity: 0,
    })
  }

  tick(nextVal) {
    var lastVal = this.state.sharePrice
    if (this.state.action === "buy") {
      this.buy(lastVal)
    } else if (this.state.action === "sell") {
      this.sell(lastVal)
    }
    this.appraise(lastVal, nextVal)
  }

  flagBuy() {
    if (this.state.stage !== "active") return
    let newLines = this.state.transactionLines
    newLines.push(<ReferenceLine key={this.state.transactionLines.length} x={this.state.currIdx} stroke="#22FF22" strokeDasharray="1 1" strokeWidth={1}/>)
    this.setState({
      action: "buy",
      transactionLines: newLines,
      buyLine: <ReferenceLine y={this.state.sharePrice} stroke="green" strokeDasharray="3 3" strokeWidth={5}/>
    })
  }

  flagSell() {
    if (this.state.stage !== "active") return
    let newLines = this.state.transactionLines
    newLines.push(<ReferenceLine key={this.state.transactionLines.length} x={this.state.currIdx} stroke="#FF2222" strokeDasharray="1 1" strokeWidth={1}/>)
    this.setState({
      action: "sell",
      transactionLines: newLines,
      buyLine: null
    })
  }

  handleKeyDown(e) {
    // refactoring needed?
    if (this.state.stage === "active") {
      if (e.key === 'p' || e.keyCode === 80) {
        this.flagBuy()
      } else if (e.key === 'l' || e.keyCode === 76) {
        this.flagSell()
      } else if (e.key === 'escape' || e.keyCode === 27) {
      }
    }
    if ((this.state.stage === "pregame" || this.state.stage === "Game Ended") && (e.key === 'spacebar' || e.keyCode === 32))
      this.startGame()
  }

  render() {
    let figures = Object.assign({}, this.state)
    const title = `${this.state.ticker}: ${this.state.company}`
    return (
      <div id="game-wrapper" onKeyPress={this.handleKeyPress} >
        <GameHud id="game-hud" figures={figures} buy={this.flagBuy} sell={this.flagSell}/>
        {this.state.company ? <h1 id="graph-title">{title}</h1> : null}
        {this.state.yearRange ? <h2 id="graph-title-years">{this.state.yearRange}</h2> : null}
        <div id="game-graph-wrapper">
          {(this.state.stage === "active" || this.state.stage === "Game Ended") ?
              <GameGraph data={this.state.data.slice(0, this.state.currIdx)}
                         min={this.state.sharePriceMin}
                         max={this.state.sharePriceMax}
                         range={this.state.sharePriceMax - this.state.sharePriceMin}
                         buyLine={this.state.buyLine}
                         transactionLines={this.state.transactionLines} /> : null}
          {(this.state.stage === "pregame") ? <GameButton name="Start Game" handleClick={this.startGame} /> : null }
          {(this.state.stage === "Game Ended") ? <GameButton name="Start New Game" handleClick={this.startGame} /> : null }
        </div>
      </div>
    )
  }
}
