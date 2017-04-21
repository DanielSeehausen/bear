import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import ReactDOM from 'react-dom'
import { dispatch } from './rails_api/dispatch.js'

import Home from './components/home/home.component.jsx'
import Game from './components/game/game.component.jsx'


// (function manageProfile() {
//   let username = localStorage.getItem("username") || "anon"
//   let uniqueId = localStorage.getItem("uniqueId") || false
//   let status = uniqueId ? "Found" : "Newly Created"
//   dispatch.setUserProfile(username, uniqueId, status)
// })()

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/game' component={Game} />
    </div>
  </Router>,
  document.getElementById('container')
)
