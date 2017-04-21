import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'
import Bio from './bio.component.jsx'

export default class AboutSplash extends Component {
  constructor() {
    super()
    this.state = {
      activeProfile: false,
      displayText: "",
      displayTitle: "",
    }
    this.mouseOverHandler = this.mouseOverHandler.bind(this)
  }

  mouseOverHandler(event) {
    console.log("sdsd")
    if (event.currentTarget.id === "daniel-pic") {
      this.setState({
        activeProfile: true,
        displayText: "Daniel's profile text",
        displayTitle: "Daniel Seehausen"
      })
    } else if (event.currentTarget.id === "tuco-pic") {
      this.setState({
        activeProfile: true,
        displayText: "TUCO. JUST TUCO.",
        displayTitle: "TUCO TITLE (look away)"
      })
    }
  }

  render() {

    return (
      <div id="about-splash" className="slow-fadeable splash-wrapper">
        <Bio name={this.state.displayTitle} bioText={this.state.displayText} github="" linkedin="" />
        <div className="bio-pics-wrapper">
          <ul>
            <li id="daniel-pic" onMouseOver={this.mouseOverHandler} className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/ds_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/ds_color.jpg"></img>
            </li>
            <li id="lauren-pic" onMouseOver={this.mouseOverHandler} className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/lg_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/lg_color.jpg"></img>
            </li>
            <li id="nick-pic" onMouseOver={this.mouseOverHandler} className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/na_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/na_color.jpg"></img>
            </li>
            <li id="tuco-pic" onMouseOver={this.mouseOverHandler} className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/tuco_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/tuco_color.jpg"></img>
            </li>
          </ul>
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
