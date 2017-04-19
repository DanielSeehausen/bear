import React, { Component } from 'react'
import { render } from 'react-dom'

export default class ImgButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img id={`${this.props.name}-img-button`} className={"img-button"} src={this.props.imgSrc} onClick={this.props.toggler}/>
    )
  }
}
