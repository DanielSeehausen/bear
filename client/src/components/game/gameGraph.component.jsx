import React, { Component } from 'react'
import { AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid, ReferenceLine, Legend } from 'recharts'

export default class GameGraph extends Component {
  constructor() {
    super()
  }

  render() {
    let baseVal = { top: 5, right: 5, bottom: 5, left: 5 }
    return(
      <div>
        <AreaChart width={1050} height={500} data={this.props.data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="2%" stopColor="#4DC4BF" stopOpacity={0.8}/>
              <stop offset="96%" stopColor="#BB8811" stopOpacity={0.3}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" interval={90} />
          <YAxis domain={[this.props.sharePriceMin - this.props.range*10, this.props.sharePriceMax + this.props.range*10]}/>
          <Legend />
          <Tooltip />
          {this.props.buyLine}
          {this.props.transactionLines}
          <CartesianGrid stroke="" />
          <Area type="monotone"
                dataKey="sharePrice"
                stroke="#4DC4BF"
                fillOpacity={1}
                fill="url(#colorPv)"
                isAnimationActive={false}
          />
        </AreaChart>
      </div>
    )
  }
}
