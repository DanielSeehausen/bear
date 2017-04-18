import React, { Component } from 'react'
import { render } from 'react-dom'

export default class ImgButton extends Component {
  constructor(props) {
    super(props)
  }

  // TODO do we need to re-assign id for css or is it implicityl assigned when assigned where it is created? (mainMenu render)
  render() {
    return (
      <img id={`${this.props.name}-img-button`} className={"img-button"} src={this.props.imgSrc} />
    )
  }
}
