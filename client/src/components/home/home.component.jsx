import React, { Component } from 'react'
import { render } from 'react-dom'
import MainMenu from './main_menu/mainMenu.component.jsx'
import HowToSplash from './splashes/howToSplash.component.jsx'
import AboutSplash from './splashes/aboutSplash.component.jsx'
import { animations } from '../helpers/css_animator.js'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      gameActive: false,
      mainMenuActive: true,
      aboutSplashActive: false,
      howToSplashActive: false,
    }
    this.startGame = this.startGame.bind(this)
    this.toggleHowToSplash = this.toggleHowToSplash.bind(this)
    this.toggleAboutSplash = this.toggleAboutSplash.bind(this)
    this.toggleMainMenu = this.toggleMainMenu.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }

  componentDidMount() {
    this.domMainMenu = document.getElementById("main-menu")
    this.domHowToSplash = document.getElementById("how-to-splash")
    this.domAboutSplash = document.getElementById("about-splash")
  }

  startGame() {
    this.setState({
      gameActive: true
    })
  }

  toggleView(view) {
    // the view we are entering into
    // we have a pretty finite state machine setup going re: splash views, so switch should be appropriate
    let newState = Object.assign({}, this.state)
    switch (view) {
      case "mainMenuActive":
        animations.fadeOut(this.domHowToSplash)
        animations.fadeOut(this.domAboutSplash)
        // setTimeout(() => animations.fadeIn(this.domMainMenu), 250)
        setTimeout(() => animations.fadeIn(this.domMainMenu), 250)
        newState.aboutSplashActive = newState.howToSplashActive = false
        break
      case "aboutSplashActive":
        animations.fadeOut(this.domMainMenu)
        setTimeout(() => animations.fadeIn(this.domAboutSplash), 250)
        newState.mainMenuActive = newState.howToSplashActive = false
        break
      case "howToSplashActive":
        animations.fadeOut(this.domMainMenu)
        setTimeout(() => animations.fadeIn(this.domHowToSplash), 250)
        newState.mainMenuActive = newState.aboutSplashActive = false
        break
      default:
        animations.fadeIn(this.domMainMenu)
        animations.fadeOut(this.domMainMenu)
        animations.fadeOut(this.domAboutSplash)
        newState.aboutSplashActive = newState.howToSplashActive = false
        break
    }
    newState[view] = true
    this.setState({
      newState
    })
  }

  toggleMainMenu() {
    this.toggleView("mainMenuActive")
  }

  toggleHowToSplash() {
    this.state.howToSplashActive ? this.toggleView("mainMenuActive") : this.toggleView("howToSplashActive")
  }

  toggleAboutSplash() {
    this.state.aboutSplashActive ? this.toggleView("mainMenuActive") : this.toggleView("aboutSplashActive")
  }

  render() {
    const togglers = {startGame:   this.startGame,
                      howToSplash: this.toggleHowToSplash,
                      aboutSplash: this.toggleAboutSplash}
    return (
      <div className="home">
        <MainMenu    id="main-menu" togglers={togglers} />
        <HowToSplash id="how-to-splash" toggler={this.toggleMainMenu} />
        <AboutSplash id="about-splash" toggler={this.toggleMainMenu} />
      </div>
    )
  }
}
