import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import ReactDOM from 'react-dom'
import { dispatch } from './rails_api/dispatch.js'

import Home from './components/home/home.component.jsx'
import Game from './components/game/game.component.jsx'


(() => {
  let username = localStorage.getItem("username") || "Anon"
  let uniqueId = localStorage.getItem("uniqueId") || "-1" // if no id found we default to -1. api will handle creation of new user
  dispatch.reconcileUserProfile(username, uniqueId)
  dispatch.reconcileStockData("DEFAULT")
})()

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
