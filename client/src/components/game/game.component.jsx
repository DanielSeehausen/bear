import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Game extends Component {

  componentDidMount() {
    console.log("Game hit")
  }

  render() {
    return (
      <h3>'game here'</h3>
    )
  }
}
