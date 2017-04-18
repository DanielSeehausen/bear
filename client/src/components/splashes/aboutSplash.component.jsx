import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'

export default class AboutSplash extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="about-splash" className="fadeable splash">
        <ImgButton className="exit-button" name="exit" imgSrc="static_assets/images/exit-icon-small.png" toggler={this.props.toggler}/>
        <div>
          About Splash Text is HERERERERERER
        </div>
      </div>
    )
  }
}
