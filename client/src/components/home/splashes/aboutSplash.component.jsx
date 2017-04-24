import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'
import Bio from './bio.component.jsx'

const profiles = {
  def: {
    title: "THIS IS DEF TITLE",
    text: "This is the text about the game",
    github: false,
    linkedin: false,
    lastActive: "def"
  },
  daniel: {
    title: "TITLE for daniel",
    text: "this is text for daniel",
    github: "https://github.com/danielseehausen",
    linkedin: "https://www.linkedin.com/in/danielseehausen",
    lastActive: "daniel"
  },
  lauren: {
    title: "TITLE for lauren",
    text: "this is text for lauren",
    github: "https://github.com/lgrapstein",
    linkedin: "https://www.linkedin.com/in/laurengrapstein",
    lastActive: "lauren"
  },
  nick: {
    title: "TITLE for nick",
    text: "this is text for nick",
    github: "https://github.com/NicholasAnaya",
    linkedin: "https://www.linkedin.com/in/nickanaya/",
    lastActive: "nick"
  },
  tuco: {
    title: "TITLE for tuco",
    text: "this is text for tuco",
    github: "http://www.imdb.com/character/ch0236592/",
    linkedin: "https://www.youtube.com/watch?v=QMjlcoeRgGw",
    lastActive: "tuco"
  }
}

export default class AboutSplash extends Component {
  constructor() {
    super()
    this.state = {
      activeProfile: "def",
      text: profiles.def.text,
      title: profiles.def.title,
      github: false,
      linkedin: false,
      lastActive: "def",
    }
    this.mouseOverHandler = this.mouseOverHandler.bind(this)
    this.setDefault = this.setDefault.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  mouseOverHandler(e) {
    Array.prototype.forEach.call(document.getElementsByClassName("active-img"), (el) => {
      if (el.id === this.state.lastActive) return
      el.style.opacity = 0
      el.style.boxShadow = null
    })
    e.target.style.opacity = 1
  }

  setDefault() {
    this.setState(Object.assign({}, profiles.def))
  }

  onClickHandler(e) {
    Array.prototype.filter.call(document.getElementsByClassName("active-img"), (el) => {
      el.style.opacity = 0
      el.style.boxShadow = null
    })
    if (this.state.lastActive === e.target.id) {
      this.setDefault()
      return
    }
    e.target.style.opacity = 1
    e.target.style.boxShadow = "0px 0px 60px #FFBB66"
    let newState = Object.assign({}, profiles[e.target.id])
    this.setState(newState)
  }

  render() {
    return (
      <div id="about-splash" className="slow-fadeable splash-wrapper">
        <ImgButton className="exit-button" name="exit" imgSrc="static_assets/images/exit-icon-small.png" toggler={this.props.toggler}/>
        <div id="about-splash-wrapper">
          <div id="halp"></div>
          <Bio lastActive={this.state.lastActive} name={this.state.title} bioText={this.state.text} github={this.state.github} linkedin={this.state.linkedin} />
          <div className="bio-pics-wrapper">
            <ul>
              <li id="daniel-pic" className="bio-pic">
                <img className="passive-img" src="static_assets/images/bio_imgs/ds_bw.jpg"></img>
                <img id="daniel" className="slow-fadeable active-img" onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/ds_color.jpg"></img>
              </li>
              <li id="lauren-pic" className="bio-pic">
                <img className="passive-img" src="static_assets/images/bio_imgs/lg_bw.jpg"></img>
                <img id="lauren" className="slow-fadeable active-img" onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/lg_color.jpg"></img>
              </li>
              <li id="nick-pic" className="bio-pic">
                <img className="passive-img" src="static_assets/images/bio_imgs/na_bw.jpg"></img>
                <img id="nick" className="slow-fadeable active-img" onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/na_color.jpg"></img>
              </li>
              <li id="tuco-pic" className="bio-pic">
                <img className="passive-img" src="static_assets/images/bio_imgs/tuco_bw.jpg"></img>
                <img id="tuco" className="slow-fadeable active-img" onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/tuco_color.jpg"></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

/* <Bio id="daniel-bio" name="Daniel Seehausen" bioText={danielText} github="https://github.com/danielseehausen" linkedin="https://www.linkedin.com/in/danielseehausen" />
<Bio id="lauren-bio" name="Lauren Grapstein" bioText={laurenText} github="https://github.com/lgrapstein" linkedin="https://www.linkedin.com/in/laurengrapstein" />
<Bio id="nick-bio" name="Nicholas Anaya" bioText={nickText} github="https://github.com/NicholasAnaya" linkedin="https://www.linkedin.com/in/nickanaya/" />
<Bio id="tuco-bio" name="Tuco Salamanca" bioText={tucoText} github="http://www.imdb.com/character/ch0236592/" linkedin="https://www.youtube.com/watch?v=QMjlcoeRgGw" />

const activeProfile = this.state.activeProfile
const nickText = "This is nick's bio text"
const danielText = "This is daniel's bio text"
const danielPic = <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/ds_color.jpg"></img>
const laurenText = "This is lauren's bio text"
const tucoText = "This is tuco's bio text"

if (activeProfile) {
  debugger
  return (
    <div id="about-splash" className="slow-fadeable splash-wrapper">
      {danielText}
      {danielPic}
    </div>
  )

}
*/
