import React, { Component } from 'react'
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
]

class Game extends Component {
  constructor() {
    super()
    this.randomStockData = null
    this.mountRandomStock = this.mountRandomStock.bind(this)
  }

   mountRandomStock(stock) {
     console.log("Mounting: ", stock)
     this.randomStockData = stock.price_values.map((val, idx) => {
       return {name: stock.time_values[idx], uv: val}
     })
     console.log(this.randomStockData)
     debugger
   }

  //  right here have something that delays the ma[]

  componentWillMount() {
    let self = this
    $.getJSON('http://localhost:3000/game_rounds/DEFAULT').then((data) => {
      self.mountRandomStock(data.msg_data[Math.floor(Math.random()*data.msg_data.length)])
    }, (err) => console.error(err, "UNABLE TO FETCH DEFAULT GAME DATA FROM API!"))
  }

  render() {
    return(
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>

        <defs>

          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              // first offset determines % of first color gradient (same with 2nd)
              // second opacity is how transparent the color of the graph is
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0}/>
            <stop offset="100%" stopColor="#8884d8" stopOpacity={0.8}/>
          </linearGradient>

        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    )
  }
}

export default Game
