import React, { Component } from 'react'
import { render } from 'react-dom'
import MainMenu from './main_menu/mainMenu.component.jsx'
import HowToSplash from './splashes/howToSplash.component.jsx'
import AboutSplash from './splashes/aboutSplash.component.jsx'
import { animations } from '../helpers/css_animator.js'


export default class App extends Component {
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
  }

  onComponentDidMount() {
    this.domMainMenu = this.getElementById("main-menu")
    this.domHowToSplash = this.getElementById("how-to-splash")
    this.domAboutSplash = this.getElementById("about-splash")
  }

  startGame() {
    this.setState({
      gameActive: true
    })
  }

  //TODO combine the three toggling functions while preserving state changing itegrity
  toggleMainMenu() {
    if (gameActive) return
    this.state.mainMenuActive ? animations.fadeOut(this.domMainMenu, 300) : animations.fadeIn(this.domMainMenu, 300)
    this.setState({
      mainMenuActive: !this.state.mainMenuActive
    })
  }

  toggleHowToSplash() {
    debugger

    if (gameActive) return
    this.state.howToSplashActive ? animations.fadeOut(this.domHowToSplash, 300) : animations.fadeIn(this.domHowToSplash, 300)
    this.setState({
      howToSplashActive: !this.state.howToSplashActive
    })
  }

  toggleAboutSplash() {
    if (gameActive) return
    this.state.aboutSplashActive ? animations.fadeOut(this.domAboutSplash, 300) : animations.fadeIn(this.domAboutSplash, 300)
    this.setState({
      aboutSplashActive: !this.state.aboutSplashActive
    })
  }

  render() {
    const togglers = {startGame:   this.startGame,
                      howToSplash: this.toggleHowToSplash,
                      aboutSplash: this.toggleAboutSplash}
    return (
      <div className="app">
        <MainMenu    id="main-menu" togglers={togglers} />
        <HowToSplash id="how-to-splash" />
        <AboutSplash id="about-splash" />
      </div>
    )
  }
}
