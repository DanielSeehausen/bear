import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Home from './components/home/home.component.jsx'
import Game from './components/game/game.component.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route path='/game' component={Game} />
    </div>
  </Router>,
  document.getElementById('container')
)
