import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Blog from './modules/Blog'
import Projects from './modules/Projects'
import Etsy from './modules/Etsy'
import Todo from './modules/Todo'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/projects" component={Projects}>
        <Route path="/projects/webcoding/etsy" component={Etsy}/>
        <Route path="/projects/webcoding/todo" component={Todo}/>
      </Route>
      <Route path="/blog" component={Blog}/>
    </Route>
  </Router>
), document.getElementById('app'))
