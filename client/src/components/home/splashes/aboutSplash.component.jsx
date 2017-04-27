import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'
import Bio from './bio.component.jsx'

const profiles = {
  def: {
    title: "",
    text: "Bear allows the user to experience the highs and lows of stock market trading. Built with Rails, React, Express, and love. Either click buy and sell or use 'p' and 'l'. Go out there and make some money!,
    github: false,
    linkedin: false,
    lastActive: "def"
  },
  daniel: {
    title: "Daniel Seehausen",
    text: "After surviving the terrible fire-bombing of Dresden that took place in the death rattles of World War II, Daniel is a self-decidedly non-heroic man who has become 'unstuck in time.' He travels back and forth in time, visiting his birth, death, all the moments in between repeatedly and out of order.",
    github: "https://github.com/danielseehausen",
    linkedin: "https://www.linkedin.com/in/danielseehausen",
    lastActive: "daniel"
  },
  lauren: {
    title: "Lauren Grapstein",
    text: "As a product of one of the most controversial births of the 20th century, Lauren retreated into the world of programming at an early age. Referring to it exclusively as 'The Matrix', she creates web content at a blistering clip. Her efficiency comes at a low cost, demanding only enough to purchase a steady supply of cat food.",
    github: "https://github.com/lgrapstein",
    linkedin: "https://www.linkedin.com/in/laurengrapstein",
    lastActive: "lauren"
  },
  nick: {
    title: "Nicholas Anaya",
    text: "With B.S. in Marketing Management from the Martin J Whitman School of Management at Syracuse University, Nick brings experience in advertising, public relations, and supply chain analysis to the table. Nick is a quick-learner, team player, and driven individual. His fluency in Spanish has been a particular asset to the project. He is the only one who Tuco listens to. He is also handsome as all hell.",
    github: "https://github.com/NicholasAnaya",
    linkedin: "https://www.linkedin.com/in/nickanaya/",
    lastActive: "nick"
  },
  tuco: {
    title: "Tuco Salamanca - Consultant",
    text: "Mr. Salamanca brings over a decade of managerial experience to the table. By leveraging his background in pharmaceuticals, Tuco applies knowledge of highly volatile commodities and how to best represent their price fluctuations visually.",
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
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)
  }

  mouseLeaveHandler(e) {
    Array.prototype.forEach.call(document.getElementsByClassName("active-img"), (el) => {
      if (el.id === this.state.lastActive) return
      el.style.opacity = 0
      el.style.boxShadow = null
    })
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
                <img id="daniel" className="slow-fadeable active-img" onMouseLeave={this.mouseLeaveHandler} onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/ds_color.jpg"></img>
              </li>
              <li id="lauren-pic" className="bio-pic">
                <img className="passive-img" src="static_assets/images/bio_imgs/lg_bw.jpg"></img>
                <img id="lauren" className="slow-fadeable active-img" onMouseLeave={this.mouseLeaveHandler} onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/lg_color.jpg"></img>
              </li>
              <li id="nick-pic" className="bio-pic">
                <img className="passive-img" src="static_assets/images/bio_imgs/na_bw.jpg"></img>
                <img id="nick" className="slow-fadeable active-img" onMouseLeave={this.mouseLeaveHandler} onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/na_color.jpg"></img>
              </li>
              <li id="tuco-pic" className="bio-pic">
                <img className="passive-img" src="static_assets/images/bio_imgs/tuco_bw.jpg"></img>
                <img id="tuco" className="slow-fadeable active-img" onMouseLeave={this.mouseLeaveHandler} onMouseEnter={this.mouseOverHandler} onMouseDown={this.onClickHandler} src="static_assets/images/bio_imgs/tuco_color.jpg"></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
