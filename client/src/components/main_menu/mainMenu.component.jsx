import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'
import OnHoverImgBundle from '../common_components/onHoverImgBundle.component.jsx'

export default class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
      howToSplashActive: false,
      aboutSplashActive: false,
    }
  }

  onComponentDidMount() {
    // in another project Jquery was behaving differently when used in a similar manner so am using vanilla JS for now
    this.domSelf = document.getElementById("main-menu")
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div id="main-menu" className="fadeable">
        <ul>
          <li><ImgButton name="about" imgSrc="static_assets/images/compass.png" toggler={this.props.togglers.aboutSplash} /></li>
          <li><ImgButton name="play" imgSrc="static_assets/images/bear.png" toggler={this.props.togglers.startGame} /></li>
          <li><ImgButton name="how-to" imgSrc="static_assets/images/cog_small.png" toggler={this.props.togglers.howToSplash} /></li>
        </ul>
      </div>
    )
  }
}

//
// <li><OnHoverImgBundle name="about"    imgSources={["static_assets/images/compass.png", "static_assets/images/compass_line_ew.png", "static_assets/images/compass_line_ns.png"]} toggler={this.props.togglers.howToSplash} /></li>
// <li><OnHoverImgBundle name="settings" imgSources={["static_assets/images/cog_large.png", "static_assets/images/cog_small.png"]} toggler={this.props.togglers.aboutSplash} /></li>
