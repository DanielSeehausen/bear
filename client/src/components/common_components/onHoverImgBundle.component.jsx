import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from './imgButton.component.jsx'

export default class OnHoverImgBundle extends Component {
  // This takes in an array of img sources and renders an active img-button that fades to opacity 1 on hover
  // the first img in the array has partial opacity when passive and is the image that handles the on click event
  constructor(props) {
    super(props)
  }

  render() {
    let backgroundImgBundles = []
    for (let idx = 1; idx < this.props.imgSources.length; idx++) {
      backgroundImgBundles.push(<img key={idx} className="slow-fadeable passive-img bundle-background-img" src={this.props.imgSources[idx]} />)
    }

    return (
      <div id={`${this.props.name}-img-bundle-wrapper`}>
        <img className="fadeable partial-fade" src={this.props.imgSources[0]} onClick={this.props.toggler}/>
        { backgroundImgBundles }
      </div>
    )
  }
}
