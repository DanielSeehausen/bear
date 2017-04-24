import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'

export default class Bio extends Component {
  constructor() {
    super()
  }

  //TODO: on hover mini splashes for each bio populates and they should be components of their own
  render() {
    console.log(this.props.lastActive)
    return (
      <div className="bio-wrapper fadeable">
        <div className="bio-text">
          <h3>{this.props.name}</h3>
          <p>{this.props.bioText}</p>
        </div>
        { this.props.lastActive === "def" ? false :
          <ul className="icons-list">
            <li>
              <a href={this.props.github}>
                <img className="icon" src="static_assets/images/icons/github_icon.png"/>
              </a>
            </li>
            <li>
              <a href={this.props.linkedin}>
                <img className="icon" src="static_assets/images/icons/linkedin_icon.png"/>
              </a>
            </li>
          </ul>
        }
      </div>
    )
  }
}
