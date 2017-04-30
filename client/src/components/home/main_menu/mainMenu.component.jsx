import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'
import OnHoverImgBundle from '../common_components/onHoverImgBundle.component.jsx'
import { Link } from 'react-router-dom'


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

<<<<<<< Updated upstream
=======
  fade(direction, clip) {
    const src = clip === "j" ? this.jeffAudio : this.brazilAudio
    if (direction === "in") {
      clearInterval(fadeOut)
      src.play()
      var fadeIn = setInterval(() => {
        if (src.volume > 0.75)
          clearInterval(fadeIn)
        if (src.volume <= 0.75)
          src.volume += 0.01
      }, 10)
    } else if (direction === "out") {
      clearInterval(fadeIn)
      var fadeOut = setInterval(() => {
        if (src.volume > 0.01)
          src.volume -= 0.01
        if (src.volume <= 0.01) {
          clearInterval(fadeOut)
          src.pause()
        }
      }, 10)
    }
  }

>>>>>>> Stashed changes
  render() {
    return (
      <div id="main-menu" className="fadeable">
        <ul>
          <li><ImgButton name="about" imgSrc="static_assets/images/bear.png" toggler={this.props.togglers.aboutSplash} /></li>
          <li>
            <Link to="/game">
              <ImgButton name="game" imgSrc="static_assets/images/bear.png" toggler={this.props.togglers.startGame} />
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
