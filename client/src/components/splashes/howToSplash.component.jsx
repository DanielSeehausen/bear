import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'


export default class HowToSplash extends Component {
  constructor() {
    super()
  }

  render() {
    const classNames = ["splash", "fadeable"]
    return (
      <div id="how-to-splash" className="fadeable splash" >
        <ImgButton className="exit-button" name="exit" imgSrc="static_assets/images/exit-icon-small.png" toggler={this.props.toggler}/>
        Directions should go here
      </div>
    )
  }
}
