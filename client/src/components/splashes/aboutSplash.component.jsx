






import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'

export default class AboutSplash extends Component {
  constructor() {
    super()
  }

  //TODO: on hover mini splashes for each bio populates and they should be components of their own
  render() {
    return (
      <div id="about-splash" className="slow-fadeable splash-wrapper">
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
