import React, { Component } from 'react'
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'

export default class GameGraph extends Component {
  constructor() {
    super()
  }

  render() {
    let baseVal = { top: 5, right: 5, bottom: 5, left: 5 }
    return(
      <div>
        <AreaChart width={1000} height={500} data={this.props.data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="3%" stopColor="#BB8811" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#BB8811" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis domain={[this.props.sharePriceMin - this.props.range*10, this.props.sharePriceMax + this.props.range*10]}/>
          <Tooltip />
          <Area type="monotone"
                dataKey="sharePrice"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorPv)"
                animationEasing='linear' />
        </AreaChart>
      </div>
    )
  }
}
