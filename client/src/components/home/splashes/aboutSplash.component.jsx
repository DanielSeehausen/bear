import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'
import Bio from './bio.component.jsx'

export default class AboutSplash extends Component {
  constructor() {
    super()
  }

  //TODO: on hover mini splashes for each bio populates and they should be components of their own
  render() {

    const nickText = "This is nick's bio text"
    const danielText = "This is daniel's bio text"
    const laurenText = "This is lauren's bio text"
    const tucoText = "This is tuco's bio text"
    return (
      <div id="about-splash" className="slow-fadeable splash-wrapper">
        <Bio name="Daniel Seehausen" bioText={danielText} github="https://github.com/danielseehausen" linkedin="https://www.linkedin.com/in/danielseehausen" />
        <Bio name="Lauren Grapstein" bioText={laurenText} github="https://github.com/lgrapstein" linkedin="https://www.linkedin.com/in/laurengrapstein" />
        <Bio name="Nicholas Anaya" bioText={nickText} github="https://github.com/NicholasAnaya" linkedin="https://www.linkedin.com/in/nickanaya/" />
        <Bio name="Tuco Salamanca" bioText={tucoText} github="http://www.imdb.com/character/ch0236592/" linkedin="https://www.youtube.com/watch?v=QMjlcoeRgGw" />
        <ImgButton className="exit-button" name="exit" imgSrc="static_assets/images/exit-icon-small.png" toggler={this.props.toggler}/>
        <div className="bio-pics-wrapper">
          <ul>
            <li className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/ds_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/ds_color.jpg"></img>
            </li>
            <li className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/lg_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/lg_color.jpg"></img>
            </li>
            <li className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/na_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/na_color.jpg"></img>
            </li>
            <li className="bio-pic">
              <img className="passive-img" src="static_assets/images/bio_imgs/tuco_bw.jpg"></img>
              <img className="slow-fadeable active-img" src="static_assets/images/bio_imgs/tuco_color.jpg"></img>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
